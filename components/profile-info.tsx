import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

export default async function ProfileInfo() {
    const session = await auth();
    if (!session?.user) {
        return (
            <p className="py-16 text-5xl text-center text-cyan-800">
                Please sign in:
                <br />
                <button
                    onClick={async () => {
                        "use server";
                        await signIn("google");
                    }}
                >
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
            <button
                onClick={async () => {
                    "use server";
                    await signOut();
                }}
            >
                Sign out
            </button>
        </p>
    );
}
