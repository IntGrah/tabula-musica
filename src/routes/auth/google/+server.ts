import { redirect } from "@sveltejs/kit";
import { generateState, generateCodeVerifier } from "arctic";
import { google } from "$lib/server/oauth";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (event) => {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const url = google.createAuthorizationURL(state, codeVerifier, ["openid", "profile", "email"]);
    url.href += "&hd=cam.ac.uk";

    event.cookies.set("google_oauth_state", state, {
        path: "/",
        httpOnly: true,
        maxAge: 10 * 60, // 10 minutes
        sameSite: "lax",
    });

    event.cookies.set("google_code_verifier", codeVerifier, {
        path: "/",
        httpOnly: true,
        maxAge: 10 * 60, // 10 minutes
        sameSite: "lax",
    });

    redirect(302, url.toString());
};
