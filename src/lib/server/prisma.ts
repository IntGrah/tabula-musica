import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const adapter = PrismaAdapter(prisma);

export default prisma;
