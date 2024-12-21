import prisma from "$lib/server/prisma";
import type { Session, User } from "@prisma/client";
import type { RequestEvent } from "@sveltejs/kit";

const DAY = 24 * 60 * 60 * 1000;

export const COOKIE_NAME = "15142497129871928372";

export function setSessionTokenCookie(event: RequestEvent, token: string, expires: Date): void {
    event.cookies.set(COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        expires,
        path: "/",
    });
}

export function deleteSessionTokenCookie(event: RequestEvent): void {
    event.cookies.set(COOKIE_NAME, "", {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 0,
        path: "/",
    });
}

export function generateSessionToken(): string {
    return crypto.randomUUID();
}

export async function createSession(sessionToken: string, userId: string): Promise<Session> {
    return await prisma.session.create({
        data: {
            userId,
            sessionToken,
            expires: new Date(Date.now() + 30 * DAY),
        },
    });
}

export async function validateSessionToken(sessionToken: string): Promise<SessionValidationResult> {
    const session = await prisma.session.findFirst({
        where: { sessionToken },
        include: { user: true },
    });

    // No valid session
    if (!session) {
        return { session: null, user: null };
    }

    // Expired session
    if (Date.now() >= session.expires.getTime()) {
        await prisma.session.delete({
            where: { id: session.id },
        });
        return { session: null, user: null };
    }

    // Extend the session upon successful validation
    if (Date.now() >= session.expires.getTime() - 15 * DAY) {
        session.expires = new Date(Date.now() + 30 * DAY);
        await prisma.session.update({
            where: { id: session.id },
            data: { expires: session.expires },
        });
    }

    return { session, user: session.user };
}

export async function invalidateSession(sessionId: string): Promise<void> {
    await prisma.session.delete({
        where: { id: sessionId },
    });
}

export type SessionValidationResult =
    | { session: Session; user: User }
    | { session: null; user: null };
