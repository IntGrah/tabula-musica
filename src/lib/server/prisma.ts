import { PrismaClient as ImportedPrismaClient } from '@prisma/client';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { PrismaClient } = require('@prisma/client');

const prisma: ImportedPrismaClient = new PrismaClient();

export default prisma;
