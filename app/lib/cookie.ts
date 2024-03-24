import { cookies } from "next/headers";

export namespace Cookie {
    const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
    const _TMST = "_tmst";

    export function get() {
        const cookie = cookies().get(_TMST);
        if (!cookie) return null;
        return cookie.value;
    }

    export function set(sessionToken: string) {
        cookies().set(_TMST, sessionToken, {
            maxAge: THIRTY_DAYS_IN_MS,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });
    }

    export function del() {
        cookies().delete(_TMST);
    }
}
