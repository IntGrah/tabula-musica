import { User_role } from '@prisma/client';

export function isSubscriber(role: User_role) {
	return role === User_role.subscriber || role === User_role.editor || role === User_role.admin;
}
