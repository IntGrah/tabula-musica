import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import mysql from "mysql2/promise";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

async function getUser(_email: string): Promise<User | undefined> {
    const conn = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_TABLE,
    });

    try {
        const [results, fields] = await conn.query("SELECT * FROM USERS");
        console.log(results, fields);
        return {
            userId: 1,
            editor: true,
            email: "jc2483@cam.ac.uk",
            firstName: "Jeremy",
            lastName: "Chen",
            mailingList: true,
            password: "awd",
            admin: true,
            creationTime: new Date(),
            lastAccessed: new Date(),
        };
    } catch (error) {
        console.error(error);
    }
}

export const { auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            if (isOnDashboard) {
                return isLoggedIn; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/dashboard", nextUrl));
            }
            return true;
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string().email(),
                        password: z.string().min(6),
                    })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (passwordsMatch) return user;
                }

                console.log("Invalid credentials");
                return null;
            },
        }),
    ],
});
