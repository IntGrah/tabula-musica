import { generateSessionToken, createSession, setSessionTokenCookie } from "$lib/server/session";
import { google } from "$lib/server/oauth";
import { decodeIdToken } from "arctic";
import { error, redirect } from "@sveltejs/kit";
import type { OAuth2Tokens } from "arctic";
import prisma from "$lib/server/prisma";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (event) => {
    const code = event.url.searchParams.get("code");
    const state = event.url.searchParams.get("state");
    const storedState = event.cookies.get("google_oauth_state") ?? null;
    const codeVerifier = event.cookies.get("google_code_verifier") ?? null;
    if (code === null || state === null || storedState === null || codeVerifier === null) {
        error(400);
    }

    if (state !== storedState) {
        error(400);
    }

    let tokens: OAuth2Tokens;

    try {
        tokens = await google.validateAuthorizationCode(code, codeVerifier);
    } catch (e) {
        error(400);
    }

    const claims = decodeIdToken(tokens.idToken()) as any;
    const googleUserId = claims.sub as string;
    const username = claims.name as string;
    const email = claims.email as string;

    let user = await prisma.user.findFirst({
        where: {
            raven: {
                providerAccountId: googleUserId,
            },
        },
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                name: username,
                admin: false,
                editor: false,
                subscriber: false,
                email,
                raven: {
                    create: {
                        email,
                        providerAccountId: googleUserId,
                    },
                },
            },
        });
    }

    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, user.id);
    setSessionTokenCookie(event, sessionToken, session.expires);
    redirect(302, "/profile");
};
