import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { deleteSession } from '$lib/server/database';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.user) redirect(303, '/login?redirect=/profile');
	return { user: locals.user, session: locals.session };
};

export const actions: Actions = {
	async signout({ cookies, url }) {
		const sessionId = cookies.get('_TMST');
		if (sessionId) deleteSession(sessionId);
		cookies.delete('_TMST', { path: '/' });
		const redirectPath = url.searchParams.get('redirect');
		if (redirectPath) redirect(303, redirectPath);
		redirect(303, '/');
	}
};
