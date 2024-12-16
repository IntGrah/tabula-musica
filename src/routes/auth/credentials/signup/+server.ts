import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
	const formData = await event.request.formData();

	const credentials = {
		email: formData.get('email'),
		password: formData.get('password')
	};
	console.log(credentials);
	redirect(302, '/');
};
