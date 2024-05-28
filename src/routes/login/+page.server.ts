import prisma, {
	createSession,
	deleteAllSessions,
	getCredentials,
	getUserFromEmail
} from '$lib/server/database';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Actions } from './$types';

export const actions: Actions = {
	async login({ cookies, request, url }) {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		if (typeof email !== 'string' || typeof password !== 'string')
			return fail(400, { type: 'login', malformed: true });
		if (!email || !password) return fail(400, { type: 'login', incomplete: true });
		const user = await getUserFromEmail(email);
		if (!user) return fail(400, { type: 'login', invalid: true });
		const account = await getCredentials(user.id);
		if (!account) return fail(403, { type: 'login', oauth: true });
		const valid = await bcrypt.compare(password, account.passwordHash!);
		if (!valid) return fail(400, { type: 'login', invalid: true });
		await deleteAllSessions(user.id);
		const sessionId = await createSession(user.id);
		cookies.set('_TMST', sessionId, { path: '/' });
		const redirectPath = url.searchParams.get('redirect');
		if (redirectPath) redirect(303, redirectPath);
		else redirect(303, url.pathname);
	},

	async signup({ cookies, request, url }) {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');
		const name = formData.get('name');
		if (
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			typeof confirmPassword !== 'string' ||
			typeof name !== 'string'
		)
			return fail(400, { type: 'signup', malformed: true });
		if (!email || !password || !confirmPassword || !name)
			return fail(400, { type: 'signup', incomplete: true });
		const mailingList = formData.get('mailingList') === 'on';
		if (password !== confirmPassword) return fail(400, { type: 'signup', mismatch: true });
		const existingUser = await getUserFromEmail(email);
		if (existingUser) return fail(400, { type: 'signup', alreadyExists: true });
		const user = await prisma.user.create({
			data: {
				email,
				name,
				role: 'unverified',
				mailingList
			}
		});
		await prisma.account.create({
			data: {
				userId: user.id,
				provider: 'credentials',
				passwordHash: await bcrypt.hash(password, 10),
				isPrimary: true
			}
		});
		await deleteAllSessions(user.id);
		const sessionId = await createSession(user.id);
		cookies.set('_TMST', sessionId, { path: '/' });
		const redirectPath = url.searchParams.get('redirect');
		if (redirectPath) redirect(303, redirectPath);
		else redirect(303, url.pathname);
	}
};

export const prerender = false;
