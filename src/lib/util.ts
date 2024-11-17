import type { User_role } from '@prisma/client';

export function isSubscriber(role: User_role) {
	return role === 'subscriber' || role === 'editor' || role === 'admin';
}
