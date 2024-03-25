import Link, { LinkProps } from "next/link";
import Search from "@/components/search";

export default function Navigation() {
    return (
        <nav className="relative flex px-4 md:justify-center">
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <Search />
        </nav>
    );
}

function NavLink({ href, children }: React.PropsWithChildren<LinkProps>) {
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
