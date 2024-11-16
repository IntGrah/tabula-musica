import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q');
	const query = q?.trim();
	if (!query) redirect(303, '/');
	return { query };
};
