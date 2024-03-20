import { signIn } from "@/auth";
import { FormEvent } from "react";

export default function LoginPage() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        "use server";
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        await signIn("credentials", formData);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">Log in</button>
            </form>
            <a href="/api/auth/signin">Sign in</a>
            <br />
            <button
                onClick={async () => {
                    "use server";
                    await signIn("google");
                }}
            >
                Direct
            </button>
            <br />
        </div>
    );
}
