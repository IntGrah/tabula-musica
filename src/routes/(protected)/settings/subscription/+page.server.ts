import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';

export const load: PageServerLoad = async ({ parent }) => {
	await parent();
};

export const actions: Actions = {
	async updateaddress({ request, locals }) {
		const session = await locals.auth();
		const user = session?.user;

		if (!user) return fail(401, { type: 'updateaddress' });

		const addressSchema = z.object({
			line1: z.string(),
			line2: z.optional(z.string()),
			city: z.string(),
			postcode: z.string()
		});
		const formData = await request.formData();
		const address = addressSchema.safeParse({
			line1: formData.get('line1'),
			line2: formData.get('line2'),
			city: formData.get('city'),
			postcode: formData.get('postcode')
		});

		if (!address.success) return fail(400, { type: 'updateaddress', errors: address.error.errors });

		return fail(400, { type: 'updateaddress', reason: 'not implemented' });
	}
};
