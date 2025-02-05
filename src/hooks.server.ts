import {
    COOKIE_NAME,
    deleteSessionTokenCookie,
    setSessionTokenCookie,
    validateSessionToken,
} from "$lib/server/session";
import type { User } from "@prisma/client";
import { error, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get(COOKIE_NAME) ?? null;
    if (token) {
        const { session, user } = await validateSessionToken(token);

        if (session) {
            setSessionTokenCookie(event, token, session.expires);
        } else {
            deleteSessionTokenCookie(event);
        }

        event.locals.session = session;
        event.locals.user = user;
    } else {
        event.locals.session = null;
        event.locals.user = null;
    }

    guard(event.locals.user, event.route.id);

    return resolve(event);
};

const guard = (user: User | null, routeId: string | null) => {
    if (!routeId) return;
    if (routeId.startsWith("/(align)/(admin)")) {
        if (!user) error(403);
    }
};
