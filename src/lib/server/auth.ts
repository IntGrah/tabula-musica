import type { Session, User } from '@prisma/client';
import { getSession, getUser } from '$lib/server/database';
import type { RequestEvent } from '@sveltejs/kit';

// const Google = {
//     id: "google",
//     name: "Google",
//     type: "oidc",
//     issuer: "https://accounts.google.com/",
//     style: { logo: "/google.svg", bg: "#fff", text: "#000" },
//     options: {
//         clientId: AUTH_GOOGLE_ID,
//         clientSecret: AUTH_GOOGLE_SECRET,
//     },
// };

export async function authenticate(
	event: RequestEvent
): Promise<{ session: Session; user: User } | { session: null; user: null }> {
	const cookies = event.cookies;
	const sessionId = cookies.get('_TMST');
	if (!sessionId) return { session: null, user: null };
	const session = await getSession(sessionId);
	if (!session) return { session: null, user: null };
	const user = await getUser(session.userId);
	if (!user) return { session: null, user: null };
	return { session, user };
}
