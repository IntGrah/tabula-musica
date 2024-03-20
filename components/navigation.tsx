import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="relative flex px-4 md:justify-center">
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <NavSearch />
        </nav>
    );
}
function NavSearch() {
    return (
        <search className="absolute right-4 h-full py-1 max-sm:hidden">
            <form className="h-full">
                <input
                    className="h-full px-4 w-36 focus:w-48 text-cyan-800 bg-black/5 outline-none rounded-lg border border-transparent transition-all focus:border-gray-400 focus:bg-black/10 placeholder:text-gray-500 focus:placeholder:text-gray-600"
                    placeholder="Search articles..."
                    autoFocus
                />
            </form>
        </search>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            className="relative w-20 lg:w-28 xl:w-32 py-3 text-center group"
            href={href}
        >
            <span className="tracking-wider text-cyan-800 group-hover:text-cyan-600">
                {children}
            </span>
            <hr className="absolute bottom-2 left-1/2 w-0 border-cyan-500 transition-all group-hover:left-[20%] group-hover:w-[60%]" />
        </Link>
    );
}
