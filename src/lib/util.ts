import { $Enums } from '@prisma/client';

export function isSubscriber(role: User_role) {
	return role === $Enums.User_role.subscriber || role === $Enums.User_role.editor || role === $Enums.User_role.admin;
}
