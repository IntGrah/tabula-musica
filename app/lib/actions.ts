"use server";

import { signIn, signUp, SignInCredentials, SignUpCredentials } from "@/auth";
import { redirect } from "next/navigation";

export async function handleSignIn(formData: FormData) {
    const credentials: SignInCredentials = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };
    const user = await signIn(credentials);
    if (user) redirect("/profile");
}

export async function handleSignUp(formData: FormData) {
    const credentials: SignUpCredentials = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string,
        name: formData.get("name") as string,
        mailingList: formData.get("mailingList") === "on",
    };
    const user = await signUp(credentials);
    if (user) redirect("/profile");
}

export async function handleSearch(formData: FormData) {
    let query = formData.get("search") as string;
    query = query.trim();
    if (query) redirect(`/search?q=${query}`);
}
