import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient as ImportedPrismaClient } from '@prisma/client';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { PrismaClient: RequiredPrismaClient } = require('@prisma/client');

const _PrismaClient: typeof ImportedPrismaClient = RequiredPrismaClient;

class PrismaClient extends _PrismaClient {}

const prisma = new PrismaClient();
export const adapter = PrismaAdapter(prisma);

export default prisma;
