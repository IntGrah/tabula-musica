import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

export const load: PageServerLoad = async (event) => {
	const user = event.locals.user!;

	const userAccounts = await prisma.user.findUnique({
		where: { id: user.id },
		include: {
			raven: true,
			credentials: true
		}
	});

	return { raven: userAccounts?.raven, credentials: userAccounts?.credentials };
};

export const actions: Actions = {
	async updatename(event) {
		const user = event.locals.user!;

		const nameSchema = z
			.string()
			.trim()
			.min(2, 'Name must be at least 2 characters')
			.max(100, 'Name cannot be longer than 100 characters');
		const formData = await event.request.formData();
		const name = nameSchema.safeParse(formData.get('name'));

		if (!name.success) {
			return fail(400, { type: 'updatename', errors: name.error.issues });
		}

		await prisma.user.update({
			where: { id: user.id },
			data: { name: name.data }
		});
	},

	async updateemail(event) {
		const user = event.locals.user!;

		const emailSchema = z.string().trim().email('Please enter a valid email');
		const formData = await event.request.formData();
		const email = emailSchema.safeParse(formData.get('email'));

		if (!email.success) {
			return fail(400, { type: 'updateemail', errors: email.error.issues });
		}

		await prisma.user.update({
			where: { id: user.id },
			data: {}
		});
	},

	async updatepassword(event) {
		const user = event.locals.user!;

		const passwordsSchema = z
			.object({
				old_password: z.string(),
				new_password: z
					.string()
					.min(8, 'Password must have at least 8 characters')
					.max(100, 'Password must not have more than 100 characters'),
				confirm_password: z.string()
			})
			.refine(
				({ new_password, confirm_password }) => new_password === confirm_password,
				'Passwords do not match'
			)
			.refine(() => false, 'Passwords not implemented');

		const formData = await event.request.formData();
		const passwords = passwordsSchema.safeParse({
			old_password: formData.get('old_password'),
			new_password: formData.get('new_password'),
			confirm_password: formData.get('confirm_password')
		});

		if (!passwords.success) {
			return fail(400, { type: 'updatepassword', errors: passwords.error.errors });
		}
	},

	async deleteaccount(event) {
		const user = event.locals.user!;

		const confirmationSchema = z.literal('DELETE ACCOUNT');
		const formData = await event.request.formData();
		const confirmation = confirmationSchema.safeParse(formData.get('confirmation'));

		if (!confirmation.success) {
			return fail(400, { type: 'deleteaccount', errors: confirmation.error.errors });
		}

		await prisma.user.delete({
			where: { id: user.id }
		});

		redirect(303, '/');
	}
};
