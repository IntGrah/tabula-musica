import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => {
	const q = url.searchParams.get('q');
	const from = url.searchParams.get('from');
	const query = q?.trim();
	if (!query) redirect(303, from ?? '/');
	return { query: query.trim() };
};
