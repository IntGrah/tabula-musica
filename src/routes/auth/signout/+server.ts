import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { deleteSessionTokenCookie, invalidateSession } from "$lib/server/session";

export const POST: RequestHandler = async (event) => {
    if (event.locals.session) {
        await invalidateSession(event.locals.session.id);
        deleteSessionTokenCookie(event);
        redirect(302, "/");
    } else {
        error(401);
    }
};
