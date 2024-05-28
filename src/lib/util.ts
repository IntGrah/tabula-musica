import { $Enums } from '@prisma/client';

export function isSubscriber(role: $Enums.User_role) {
	return role === 'subscriber' || role === 'editor' || role === 'admin';
}
