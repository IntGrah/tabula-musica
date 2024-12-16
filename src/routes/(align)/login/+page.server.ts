import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import * as bcrypt from 'bcryptjs';
import { z } from 'zod';

export const actions: Actions = {
	async signin(event) {
		const formData = await event.request.formData();
        console.log("foo")
        
		const credentialsSchema = z.object({
            email: z.string({ required_error: 'Email is required' }).email('Please enter an email'),
			password: z.string({ required_error: 'Password is required' })
		});
        
		const credentials = credentialsSchema.safeParse({
            email: formData.get('email'),
			password: formData.get('password')?.toString()
		});
        
		if (!credentials.success) {
            return fail(400, { errors: credentials.error.issues });
		}
        
		const passwordHash = await bcrypt.hash(credentials.data.password, 8);
        console.log(credentials.data.password, passwordHash);
		redirect(302, '/');
	}
};
