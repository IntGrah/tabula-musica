import { authenticate } from '$lib/server/auth';
import { error, redirect, type Handle } from '@sveltejs/kit';

const adminRoutes = ['/admin'];
const protectedRoutes = ['/profile', '/settings'].concat(adminRoutes);

export const handle: Handle = async ({ event, resolve }) => {
	const { user } = (event.locals = await authenticate(event));

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
