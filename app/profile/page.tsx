import { auth } from "@/auth";
import ProfileInfo from "@/components/profile-info";
import { SessionProvider } from "next-auth/react";

export default async function ProfilePage() {
    const session = await auth();

    if (session?.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
        };
    }
    return (
        <SessionProvider session={session}>
            <ProfileInfo />
        </SessionProvider>
    );
}
