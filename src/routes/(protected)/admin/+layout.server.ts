import prisma from '$lib/server/prisma';
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();
	const user = session?.user;

	if (!user) redirect(303, '/login');

	if (['jc2483@cam.ac.uk', 'ms3012@cam.ac.uk', 'jb2578@cam.ac.uk'].includes(user.email!)) {
		console.log('adding admin');
		await prisma.user.update({
			where: { id: user.id },
			data: { role: 'admin' }
		});
		user.role = 'admin';
	}

	if (user.role !== 'admin') redirect(303, '/');

	return { session };
};
