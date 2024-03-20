import NextAuth, { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import mysql, { RowDataPacket } from "mysql2";
import { Provider } from "next-auth/providers";

export interface TMUser extends User {
    crsid?: string;
    admin: boolean;
    editor: boolean;
    creationTime: Date;
    lastAccessed: Date;
}

const Raven: Provider = {
    id: "google",
    name: "Google",
    type: "oidc",
    issuer: "https://accounts.google.com/",
    style: { logo: "/google.svg", bg: "#fff", text: "#000" },
    options: {
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    },
};

const config: NextAuthConfig = {
    secret: process.env.AUTH_SECRET,
    basePath: "/api/auth",
    providers: [
        Raven,
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize(credentials, req) {
                console.log(credentials);
                const user: User = {
                    email: credentials.email as string,
                    name: "Test User",
                };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        signIn({ account, profile, credentials }) {
            if (account?.provider === "google" && profile) {
                const emailExists = emailInDatabase(profile.email!);
                if (false && !emailExists) {
                    console.log("Email not found in database");
                }
                return true;
            } else if (account?.provider === "credentials") {
                console.log(credentials);
                return true;
            }
            return true;
        },
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl;
            if (pathname === "/hidden") return !!auth;
            return true;
        },
        jwt({ token, trigger, session }) {
            if (trigger === "update") token.name = session.user.name;
            return token;
        },
    },
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth(config);

function emailInDatabase(email: string): Promise<boolean> {
    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT!),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });

    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT * FROM users WHERE email = ? LIMIT 1",
            [email],
            (error, results: RowDataPacket[]) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length === 0) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                }
            }
        );
    });
}
