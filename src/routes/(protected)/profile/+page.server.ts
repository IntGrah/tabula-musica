import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, locals }) => {
	await parent();

	const session = await locals.auth();

	return { session };
};
