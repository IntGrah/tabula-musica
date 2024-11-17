import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, locals }) => {
	await parent();

	const session = await locals.auth();

	return { session };
};

export const actions: Actions = {
	async contact({}) {
		console.log('Not implemented');
	}
};
