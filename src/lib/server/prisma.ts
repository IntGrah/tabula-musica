// import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient as ImportedPrismaClient } from '@prisma/client';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { PrismaClient } = require('@prisma/client');

const prisma: ImportedPrismaClient = new PrismaClient();

// export const adapter = PrismaAdapter(prisma);

export default prisma;
