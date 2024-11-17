import { SvelteKitAuth, type DefaultSession } from '@auth/sveltekit';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient, User_role } from '@prisma/client';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import Google from '@auth/sveltekit/providers/google';

export const prisma = new PrismaClient();
const adapter = PrismaAdapter(prisma);

declare module '@auth/sveltekit' {
	interface Session {
		user: {
			id: string;
			bio: string;
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
		}),
	],
	callbacks: {
		signIn: async ({ account, profile }) => {
			if (account?.provider !== 'google') return false;
			if (!profile?.email_verified) return false;
			if (!profile.email?.endsWith('@cam.ac.uk')) return false;
			return true;
		},
		session({ session }) {
			// session.user.id = user.id;
			// session.user.bio = user.bio;
			return session;
		}
	},
	trustHost: true
});
