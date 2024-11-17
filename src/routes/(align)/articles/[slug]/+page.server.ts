import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params, locals }) => {
	const article = await prisma.article.findFirst({
		where: { slug: params.slug },
		select: {
			slug: true,
			title: true,
			body: true,
			createdAt: true,
			user: {
				select: {
					name: true
				}
			}
		}
	});

	if (!article) error(404);

	return { ...article };
};
