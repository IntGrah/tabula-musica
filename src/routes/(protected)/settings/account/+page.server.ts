import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

export const load: PageServerLoad = async ({ parent }) => {
    await parent();
};

export const actions: Actions = {
    async updatename({ request, locals }) {
        const session = await locals.auth();
        const user = session?.user;

        if (!user) return fail(401, { type: 'updatename' });

        const nameSchema = z
            .string()
            .trim()
            .min(2, 'Name must be at least 2 characters')
            .max(100, 'Name cannot be longer than 100 characters');
        const formData = await request.formData();
        const name = nameSchema.safeParse(formData.get('name'));

        if (!name.success) return fail(400, { type: 'updatename', errors: name.error.issues });

        await prisma.user.update({
            where: { id: user.id },
            data: { name: name.data }
        });
    },

    async updateemail({ request, locals }) {
        const session = await locals.auth();
        const user = session?.user;

        if (!user) return fail(401, { type: 'updateemail' });

        const emailSchema = z.string().trim().email('Please enter a valid email');
        const formData = await request.formData();
        const email = emailSchema.safeParse(formData.get('email'));

        if (!email.success) return fail(400, { type: 'updateemail', errors: email.error.issues });

        await prisma.user.update({
            where: { id: user.id },
            data: { email: email.data }
        });
    },

    async updatepassword({ request, locals }) {
        const session = await locals.auth();
        const user = session?.user;

        if (!user) return fail(401, { type: 'updatepassword', unauthorised: true });

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

        const formData = await request.formData();
        const passwords = passwordsSchema.safeParse({
            old_password: formData.get('old_password'),
            new_password: formData.get('new_password'),
            confirm_password: formData.get('confirm_password')
        });

        if (!passwords.success)
            return fail(400, { type: 'updatepassword', errors: passwords.error.errors });
    },

    async deleteaccount({ request, locals }) {
        const session = await locals.auth();
        const user = session?.user;

        if (!user) return fail(401, { type: 'deleteaccount' });

        const confirmationSchema = z.literal('DELETE ACCOUNT');
        const formData = await request.formData();
        const confirmation = confirmationSchema.safeParse(formData.get('confirmation'));

        if (!confirmation.success)
            return fail(400, { type: 'deleteaccount', errors: confirmation.error.errors });

        await prisma.user.delete({
            where: { id: user.id }
        });

        redirect(303, '/');
    }
};
