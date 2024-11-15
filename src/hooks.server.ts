import { authenticate } from '$lib/server/auth';
import { User_role, type User } from '@prisma/client';
import { error, redirect, type Handle } from '@sveltejs/kit';
import { defaultUser } from './default_user';

const adminRoutes = ['/admin'];
const protectedRoutes = ['/profile', '/settings'].concat(adminRoutes);

export const handle: Handle = async ({ event, resolve }) => {
	// const { user } = (event.locals = await authenticate(event));

	const user = defaultUser;

	for (const route of protectedRoutes) {
		if (event.url.pathname.startsWith(route) && !user) {
			redirect(302, `/login/?redirect=${event.url.pathname}`);
		}
	}

	for (const route of adminRoutes) {
		if (event.url.pathname.startsWith(route) && user?.role !== 'admin') {
			error(403, 'Forbidden');
		}
	}

	return await resolve(event);
};
