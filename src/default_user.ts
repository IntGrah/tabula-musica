import { type User, User_role } from "@prisma/client";

export const defaultUser: User = {
    id: "awduyawd",
    email: "test@example.com",
    role: User_role.admin,
    name: "A Person",
    image: null,
    bio: "",
    mailingList: true,
    createdAt: new Date(),
    accessedAt: new Date(),
};
