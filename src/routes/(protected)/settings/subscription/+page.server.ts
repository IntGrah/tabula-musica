import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';

export const actions: Actions = {
	async updateaddress(event) {
		const user = event.locals.user!;

		const addressSchema = z.object({
			line1: z.string(),
			line2: z.optional(z.string()),
			city: z.string(),
			postcode: z.string()
		});
		const formData = await event.request.formData();
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
