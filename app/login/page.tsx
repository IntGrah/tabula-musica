import { SignInCredentials, SignUpCredentials, signIn, signUp } from "@/auth";
import prisma from "@/app/lib/database";
import { redirect } from "next/navigation";

export default function LoginPage() {
    async function handleSignIn(formData: FormData) {
        "use server";
        const credentials: SignInCredentials = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };
        const user = await signIn(credentials);
        if (user) redirect("/profile");
    }

    async function handleSignUp(formData: FormData) {
        "use server";
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

    return (
        <main>
            <div className="p-32">
                <form action={handleSignIn}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        defaultValue="password"
                        required
                    />
                    <br />
                    <button>Log in</button>
                </form>
                <br />
                <form action={handleSignUp}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue="newuser@example.com"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        defaultValue="password"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        defaultValue="password"
                        required
                    />
                    <br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        defaultValue="Jane Doe"
                        required
                    />
                    <br />
                    Would you like to subscribe to our mailing list?
                    <br />
                    <input type="checkbox" name="mailingList" />
                    <br />
                    <button>Sign up</button>
                </form>
            </div>

            <button
                onClick={async () => {
                    "use server";
                    await prisma.reset();
                }}
            >
                Reset database
            </button>
        </main>
    );
}
