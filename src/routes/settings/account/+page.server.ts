import prisma, { getSession } from '$lib/server/database';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user!;

	const credentials = await prisma.account.findUnique({
		where: { userId: user.id, provider: 'credentials' }
	});

	const google = await prisma.account.findUnique({
		where: { userId: user.id, provider: 'google' }
	});

	return { credentials, google };
};

export const actions: Actions = {
	async updateemail({ cookies, request }) {
		const formData = await request.formData();
		const name = formData.get('name');
		if (typeof name !== 'string') return fail(400, { type: 'updateemail', incomplete: true });
		if (!name) return fail(400, { type: 'updateemail', incomplete: true });
		const sessionId = cookies.get('_TMST');
		if (!sessionId) return fail(401, { type: 'updateemail', unauthorized: true });
		const session = await getSession(sessionId);
		if (!session) return fail(401, { type: 'updateemail', unauthorized: true });
		await prisma.user.update({
			where: { id: session.userId },
			data: { name }
		});
		return { success: true };
	},

	async updatepassword({ cookies, request }) {
		const formData = await request.formData();
		const bio = formData.get('bio');
		if (typeof bio !== 'string') return fail(400, { type: 'updatepassword', incomplete: true });
		const sessionId = cookies.get('_TMST');
		if (!sessionId) return fail(401, { type: 'updatepassword', unauthorized: true });
		const session = await getSession(sessionId);
		if (!session) return fail(401, { type: 'updatepassword', unauthorized: true });
		await prisma.user.update({
			where: { id: session.userId },
			data: { bio }
		});
		return { success: true };
	}
};
