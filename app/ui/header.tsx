"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";

export default function Header({ overlay }: { overlay: boolean }) {
    const [solid, setSolid] = useState(false);
    // const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const onScroll = () => setSolid(scrollY >= 240);
        onScroll();
        // setOpacity(1);
        addEventListener("scroll", onScroll);
        return () => removeEventListener("scroll", onScroll);
    }, []);

    const bgStyle: CSSProperties = {
        backgroundColor: `rgba(254, 243, 199, ${solid ? 0.8 : 0})`,
        backdropFilter: solid ? "blur(4px)" : "none",
        boxShadow: solid ? "0 2px 12px rgba(0, 0, 0, 0.2)" : "none",
        position: overlay ? "fixed" : "sticky",
    };

    return (
        <header
            className="top-0 w-full z-50 font-serif transition-all duration-500"
            style={bgStyle}
        >
            <div className="relative flex md:justify-center">
                <Logo />
                <Menu />
            </div>
            <nav className="relative flex px-4 md:justify-center">
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/events">Events</NavLink>
                <NavLink href="/#about">About</NavLink>
                <NavLink href="/#contact">Contact</NavLink>
                <NavSearch />
            </nav>
        </header>
    );
}

function Logo() {
    return (
        <div className="relative h-16 px-8 text-center">
            <div className="py-4">
                <a
                    className="font-medium text-2xl tracking-[0.2em] uppercase text-violet-900 select-none"
                    href="/"
                >
                    Tabula&nbsp;Musica
                </a>
            </div>
            <hr className="absolute bottom-2 m-auto left-[15%] w-[70%] border-violet-900" />
        </div>
    );
}

function Menu() {
    return (
        <menu className="absolute top-0 flex justify-end right-4 h-16 py-4 max-sm:hidden">
            <MenuButton href="/subscribe">Subscribe</MenuButton>
            <MenuSeparator />
            <MenuButton href="/signin">Sign in</MenuButton>
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
