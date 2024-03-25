import prisma from "@/app/lib/database";
import { handleSignIn, handleSignUp } from "@/app/lib/actions";


export default function LoginPage() {
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
