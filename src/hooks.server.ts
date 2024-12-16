import {
	deleteSessionTokenCookie,
	setSessionTokenCookie,
	validateSessionToken
} from '$lib/server/session';
import type { User } from '@prisma/client';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname;
	const token = event.cookies.get('_tm_session') ?? null;
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
		event.locals.user = null;
		event.locals.session = null;
	}

	guard(event.locals.user, event.route.id);

	return resolve(event);
};

const guard = (user: User | null, routeId: string | null) => {
	console.log('ROUTEID', routeId);
	if (!routeId) return;
	if (routeId.startsWith('/(protected)')) {
		if (!user) redirect(303, '/login');
		if (routeId.startsWith('/(protected)/(editor)')) {
			if (!user.editor) {
				redirect(303, '/');
			}
		}
		if (routeId.startsWith('/(protected)/(admin)')) {
			if (!user.admin) {
				redirect(303, '/');
			}
		}
	}
};
