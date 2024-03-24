import { User } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { destroySession, setSession } from "@/app/lib/session";
import prisma from "@/app/lib/database";

const Google = {
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

export interface SignInCredentials {
    email: string;
    password: string;
}

export interface SignUpCredentials extends SignInCredentials {
    confirmPassword: string;
    name: string;
    mailingList: boolean;
}

export async function signIn({
    email,
    password,
}: SignInCredentials): Promise<User | null> {
    const user = await prisma.getUserFromEmail(email);
    if (!user) {
        console.log("User not found");
        return null;
    }
    const credentialsAccount = await prisma.getCredentials(user);
    if (!credentialsAccount) {
        console.log("User did not sign up with credentials");
        return null;
    }
    const valid = await compare(password, credentialsAccount.passwordHash);
    if (!valid) {
        console.log("Incorrect password");
        return null;
    }
    await setSession(user);
    console.log(user.email);
    return user;
}

export async function signOut() {
    await destroySession();
}

export async function signUp({
    email,
    password,
    confirmPassword,
    name,
    mailingList,
}: SignUpCredentials) {
    if (password !== confirmPassword) {
        console.log("Passwords do not match");
        return null;
    }
    const existingUser = await prisma.getUserFromEmail(email);
    if (existingUser) {
        console.log("User already exists");
        return null;
    }
    const user = await prisma.user.create({ data: { email } });
    const profile = await prisma.profile.create({
        data: { userId: user.id, name, mailingList },
    });
    const credentialsAccount = await prisma.credentialsAccount.create({
        data: { userId: user.id, passwordHash: await hash(password, 10) },
    });
    await setSession(user);
    console.log(user.email, profile.name, credentialsAccount.passwordHash);
    return user;
}
