import prisma from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';

export const actions: Actions = {
	async createarticle(event) {
		const user = event.locals.user!;

		const articleSchema = z.object({
			slug: z
				.string({ required_error: 'Slug is required' })
				.max(255, 'Slug cannot be more than 255 characters')
				.refine(
					(slug) => /^[a-z0-9]+(\-[a-z0-9]+)*$/.test(slug),
					'Slug must be lowercase letters or numbers separated by single dashes'
				),
			title: z.string({ required_error: 'Title is reqiured' }),
			body: z.string({ required_error: 'Body is required' })
		});
		const formData = await event.request.formData();
		const article = articleSchema.safeParse({
			slug: formData.get('slug')?.toString(),
			title: formData.get('title')?.toString(),
			body: formData.get('body')?.toString()
		});
		if (!article.success) return fail(400, { type: 'updatename', errors: article.error.issues });

		await prisma.article.create({
			data: {
				slug: article.data.slug,
				title: article.data.title,
				body: article.data.body,
				createdAt: new Date(),
				userId: user.id
			}
		});
	}
};
