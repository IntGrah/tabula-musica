import { SvelteKitAuth, type DefaultSession } from '@auth/sveltekit';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import Google from '@auth/sveltekit/providers/google';
import { adapter } from '$lib/server/prisma';
import type { User_role } from '@prisma/client';

declare module '@auth/sveltekit' {
	interface Session {
		user: {
			id: string;
			role: User_role;
		} & DefaultSession['user'];
	}
}

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter,
	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			authorization: 'https://accounts.google.com/o/oauth2/auth?response_type=code&hd=cam.ac.uk'
		})
	],
	callbacks: {
		signIn: async ({ account, profile }) => {
			const unauthorised =
				account?.provider !== 'google' ||
				!profile?.email_verified ||
				!profile.email?.endsWith('@cam.ac.uk');
			return !unauthorised;
		},
		session({ session }) {
			return session;
		}
	},
	trustHost: true
});
