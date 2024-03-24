import { getSessionUserProfile } from "@/app/lib/session";
import { signOut } from "@/auth";
import { notFound, redirect } from "next/navigation";
import prisma from "../lib/database";

export default async function AdminPage() {
    const { session, user, profile } = await getSessionUserProfile();
    if (!session || !user || user.role < 5 || !profile) {
        return notFound();
    }
    return (
        <main>
            <div className="py-16 text-5xl text-center text-cyan-800">
                Hello, {profile.name}!
                <br />
                Logged in as {user.email} (admin)
                <br />
                <form
                    action={async () => {
                        "use server";
                        await signOut();
                    }}
                >
                    <button>Sign out</button>
                </form>
            </div>
            <div>
                <h2>Admin tools</h2>
                <ul>
                    {(await prisma.user.findMany()).map(user => (
                        <li key={user.id}>
                            {user.email} {user.role}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
