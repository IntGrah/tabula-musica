import prisma from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const pageQuery = url.searchParams.get('page');
	let page = 0;

	if (pageQuery) {
		const parsedPage = parseInt(pageQuery);
		if (!isNaN(parsedPage) && parsedPage > 0) {
			page = parsedPage - 1;
		}
	}

	const sizeQuery = url.searchParams.get('size');
	let size = 10;

	if (sizeQuery) {
		const parsedSize = parseInt(sizeQuery);
		if (!isNaN(parsedSize) && parsedSize >= 5) {
			size = parsedSize;
		}
	}

	const start = Date.now();
	const users = await prisma.user.findMany({
		skip: page * size,
		take: size
	});
	const usersTotal = await prisma.user.count();
	const ms = Date.now() - start;

	return { users, usersTotal, ms, page, size };
};
