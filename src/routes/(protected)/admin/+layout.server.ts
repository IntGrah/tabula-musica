import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();
	const user = session?.user;

	if (!user) redirect(303, '/login');

	if (user.role !== 'admin') redirect(303, '/');

	return { session };
};
