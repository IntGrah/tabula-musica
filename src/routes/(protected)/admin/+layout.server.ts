import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { User_role } from '@prisma/client';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();
	const user = session?.user;

	if (!user) redirect(303, '/login');

	if (user.role !== User_role.admin) redirect(303, '/');

	return { session };
};
