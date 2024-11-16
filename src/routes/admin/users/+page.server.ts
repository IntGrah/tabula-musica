import type { User } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, url }) => {
	await parent();
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
	// const users = await prisma.user.findMany({
	// 	skip: page * size,
	// 	take: size
	// });
	const users: User[] = []
	// const usersTotal = await prisma.user.count();
	const usersTotal = 0;
	const ms = Date.now() - start;

	return { users, usersTotal, ms, page, size };
};
