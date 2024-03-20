"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileInfo() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <p className="py-16 text-5xl text-center text-cyan-800">
                Please sign in:
                <br />
                <button onClick={() => signIn("google")}>
                    Sign in with Google
                </button>
            </p>
        );
    }

    return (
        <p className="py-16 text-5xl text-center text-cyan-800">
            Hello, {session?.user?.name}!
            <br />
            Logged in as {session?.user?.email}
            <br />
            <Image
                className="rounded"
                src={session?.user?.image!}
                alt=""
                width={100}
                height={100}
            />
            <button onClick={() => signOut()}>Sign out</button>
        </p>
    );
}
