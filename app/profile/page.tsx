import { getSessionUserProfile } from "@/app/lib/session";
import { signOut } from "@/auth";

export default async function ProfilePage() {
    const { user, profile } = await getSessionUserProfile();

    if (!user || !profile) {
        return (
            <main>
                <div className="py-16 text-5xl text-center text-cyan-800">
                    Please sign in:
                    <br />
                    <form>
                        <a href="/login">Sign in</a>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="py-16 text-5xl text-center text-cyan-800">
                Hello, {profile.name}!
                <br />
                Logged in as {user.email}
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
        </main>
    );
}
