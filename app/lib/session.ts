import { Cookie } from "@/app/lib/cookie";
import prisma from "@/app/lib/database";
import type { User, Profile, Session } from "@prisma/client";

export async function setSession(user: User): Promise<void> {
    await prisma.deleteSessions(user);
    const sessionToken = await prisma.createSession(user);
    Cookie.set(sessionToken);
}

export async function destroySession(): Promise<void> {
    const sessionToken = Cookie.get();
    if (sessionToken) {
        await prisma.deleteSessionFromToken(sessionToken);
        Cookie.del();
    }
}

export async function getSession(): Promise<Session | null> {
    const sessionToken = Cookie.get();
    if (!sessionToken) return null;
    return prisma.getSessionFromToken(sessionToken);
}

export async function getSessionUserProfile(): Promise<{
    session: Session | null;
    user: User | null;
    profile: Profile | null;
}> {
    const session = await getSession();
    if (!session) return { session: null, user: null, profile: null };
    const user = await prisma.getUser(session);
    if (!user) throw new Error("Session not linked to user");
    const profile = await prisma.getProfile(user);
    return { session, user, profile };
}
