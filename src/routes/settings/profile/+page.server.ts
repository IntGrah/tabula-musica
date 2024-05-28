import prisma, { getSession, getUser } from '$lib/server/database';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	async updatename({ cookies, request }) {
		const formData = await request.formData();
		const name = formData.get('name');
		if (typeof name !== 'string') return fail(400, { type: 'updatename', malformed: true });
		if (!name) return fail(400, { type: 'updatename', incomplete: true });
		const sessionId = cookies.get('_TMST');
		if (!sessionId) return fail(401, { type: 'updatename', unauthorized: true });
		const session = await getSession(sessionId);
		if (!session) return fail(401, { type: 'updatename', unauthorized: true });
		await prisma.user.update({
			where: { id: session.userId },
			data: { name }
		});
		redirect(303, '/settings/profile');
	},

	async updatebio({ cookies, request }) {
		const formData = await request.formData();
		const bio = formData.get('bio');
		if (typeof bio !== 'string') return fail(400, { type: 'updatebio', malformed: true });
		if (!bio) return fail(400, { type: 'updatebio', incomplete: true });
		if (bio.length > 240) return fail(400, { tooLong: true });
		const sessionId = cookies.get('_TMST');
		if (!sessionId) return fail(401, { type: 'updatebio', unauthorized: true });
		const session = await getSession(sessionId);
		if (!session) return fail(401, { type: 'updatebio', unauthorized: true });
		await prisma.user.update({
			where: { id: session.userId },
			data: { bio }
		});
		redirect(303, '/settings/profile');
	}
};
