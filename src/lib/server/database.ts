import { type Account, type Session, type User, PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NODE_ENV } from '$env/static/private';

const DAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

declare global {
	var prismaDB: PrismaClient | undefined;
}

const prisma = globalThis.prismaDB ?? new PrismaClient();

if (NODE_ENV !== 'production') globalThis.prismaDB = prisma;

export default prisma;

export async function reset(): Promise<void> {
	await prisma.user.deleteMany();
	await prisma.account.deleteMany();
	await prisma.session.deleteMany();
	await prisma.user.create({
		data: {
			name: 'Deleted User',
			email: 'deleteduser@example.com',
			role: 'editor'
		}
	});
	const admin = await prisma.user.create({
		data: {
			name: 'Admin User',
			email: 'admin@example.com',
			role: 'admin'
		}
	});
	await prisma.account.create({
		data: {
			userId: admin.id,
			provider: 'credentials',
			passwordHash: await bcrypt.hash('password', 10),
			isPrimary: true
		}
	});
	console.log('--- Database reset ---');
}

export async function getUser(userId: string): Promise<User | null> {
	return prisma.user.findUnique({ where: { id: userId } });
}

export async function getUserFromEmail(email: string): Promise<User | null> {
	return prisma.user.findUnique({ where: { email } });
}

export async function getSession(sessionId: string): Promise<Session | null> {
	return prisma.session.findUnique({
		where: { id: sessionId, expiresAt: { gt: new Date() } }
	});
}

export async function getCredentials(userId: string): Promise<Account | null> {
	return prisma.account.findUnique({
		where: { userId, provider: 'credentials' }
	});
}

export async function createSession(userId: string): Promise<string> {
	const session = await prisma.session.create({
		data: {
			userId,
			expiresAt: new Date(Date.now() + 30 * DAY)
		}
	});
	return session.id;
}

export async function extendSession(sessionId: string): Promise<void> {
	await prisma.session.update({
		where: { id: sessionId, expiresAt: { gt: new Date() } },
		data: { expiresAt: new Date(Date.now() + 30 * DAY) }
	});
}

export async function extendSessionsShorterThan15Days(userId: string): Promise<void> {
	await prisma.session.updateMany({
		where: {
			userId,
			expiresAt: { lte: new Date(Date.now() + 15 * DAY) }
		},
		data: { expiresAt: new Date(Date.now() + 30 * DAY) }
	});
}

export async function deleteSession(id: string): Promise<void> {
	await prisma.session.delete({ where: { id } });
}

export async function deleteAllSessions(userId: string): Promise<void> {
	await prisma.session.deleteMany({ where: { userId } });
}

export async function deleteExpiredSessions(userId: string): Promise<void> {
	await prisma.session.deleteMany({
		where: { userId, expiresAt: { lte: new Date() } }
	});
}
