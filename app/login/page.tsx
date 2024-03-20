import { signIn } from "@/auth";

export default function LoginPage() {
    return (
        <div>
            <form
                action={async formData => {
                    "use server";
                    await signIn("credentials", formData);
                }}
            >
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <br />
                <button>Log in</button>
            </form>
            <a href="/api/auth/signin">Sign in</a>
            <br />
            <form
                action={async () => {
                    "use server";
                    await signIn("google");
                }}
            >
                <button>Direct</button>
            </form>
            <br />
        </div>
    );
}
