import { auth } from "@/auth";
import Link from "next/link";

export default async function Menu() {
    const session = await auth();

    return (
        <menu className="absolute top-0 flex justify-end right-4 h-16 py-4 max-sm:hidden">
            <MenuButton href="/subscribe">Subscribe</MenuButton>
            <MenuSeparator />
            {session?.user ? (
                <MenuButton href="/profile">{session.user?.name}</MenuButton>
            ) : (
                <MenuButton href="/login">Log in</MenuButton>
            )}
        </menu>
    );
}

function MenuButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li className="flex">
            <Link
                className="flex px-3 items-center rounded-full cursor-pointer transition-colors bg-black/10 hover:bg-violet-900 tracking-wider text-violet-900 hover:text-white group"
                href={href}
            >
                {children}
            </Link>
        </li>
    );
}

function MenuSeparator() {
    return <div className="mx-2 h-full border-l border-violet-800" />;
}
