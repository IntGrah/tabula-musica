import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

export default async function ProfileInfo() {
    const session = await auth();
    if (!session?.user) {
        return (
            <div className="py-16 text-5xl text-center text-cyan-800">
                Please sign in:
                <br />
                <form
                    action={async () => {
                        "use server";
                        await signIn("google");
                    }}
                >
                    <button>Sign in with Google</button>
                </form>
            </div>
        );
    }

    return (
        <div className="py-16 text-5xl text-center text-cyan-800">
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
            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <button>Sign out</button>
            </form>
        </div>
    );
}
