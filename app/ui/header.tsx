"use client";

import { CSSProperties, useEffect, useState } from "react";

export default function Header() {
    const [scroll, setScroll] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY);
        onScroll();
        setOpacity(1);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollSolid = 240;
    const bgStyle: CSSProperties = {
        opacity,
        backgroundColor: `rgba(254, 243, 199, ${
            scroll < scrollSolid ? 0 : 0.8
        })`,
        backdropFilter: `blur(${scroll < scrollSolid ? 0 : 4}px)`,
        boxShadow: `0 ${scroll < scrollSolid ? 0 : 24}px ${
            scroll < scrollSolid ? 0 : 48
        }px ${scroll < scrollSolid ? 0 : -12}px rgba(0, 0, 0, 0.25)`,
    };

    return (
        <header
            className="fixed w-full z-50 font-serif transition-all"
            style={bgStyle}
        >
            <div className="relative">
                <Logo scale={Math.min(scroll / 720, 1)} />
                <SideBar />
            </div>
            <nav className="flex justify-center">
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/events">Events</NavLink>
                <NavLink href="/#about">About</NavLink>
                <NavLink href="/#contact">Contact</NavLink>
                <Search />
            </nav>
        </header>
    );
}

function Logo({ scale }: { scale: number }) {
    return (
        <div
            className="relative text-center"
            style={{
                height: 80 - 8 * scale,
            }}
        >
            <div className="py-4">
                <a
                    className="font-medium text-4xl tracking-widest xs:tracking-[0.2em] sm:tracking-[0.3em] uppercase text-violet-900 select-none"
                    href="/"
                    style={{
                        fontSize: 32 - 8 * scale,
                        lineHeight: `${48 - 8 * scale}px`,
                    }}
                >
                    Tabula&nbsp;Musica
                </a>
            </div>
            <hr
                className="absolute bottom-0 m-auto w-64 border-violet-900"
                style={{
                    left: `calc(50% - ${84 + 24 * scale}px)`,
                    width: 168 + 48 * scale,
                }}
            />
        </div>
    );
}

function SideBar() {
    return (
        <button className="absolute top-0 right-0 flex p-6 h-[72px] max-lg:hidden">
            <SideButton>Subscribe</SideButton>
            <Separator />
            <SideButton>Sign in</SideButton>
        </button>
    );
}

function SideButton({ children }: { children: React.ReactNode }) {
    return (
        <a className="relative flex grow h-full items-center cursor-pointer group">
            <span className="tracking-wider transition-colors text-violet-900 group-hover:text-violet-700">{children}</span>
            <hr className="absolute bottom-0 w-full border-violet-600 transition-opacity opacity-0 group-hover:opacity-100" />
        </a>
    );
}

function Separator() {
    return <div className="mx-2 h-full border-l border-violet-800" />;
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            className="relative w-20 sm:w-24 md:w-28 xl:w-32 py-3 text-center group"
            href={href}
        >
            <span className="tracking-wider text-cyan-800 group-hover:text-cyan-600">
                {children}
            </span>
            <hr className="absolute bottom-2 left-1/2 w-0 border-cyan-500 transition-all group-hover:left-[20%] group-hover:w-[60%]" />
        </a>
    );
}

function Search() {
    return (
        <form className="h-12 py-1 absolute right-4 max-lg:hidden">
            <input
                className="h-full px-4 w-40 focus:w-60 text-cyan-800 bg-black/5 outline-none rounded transition-all border border-transparent focus:border-gray-400 placeholder:text-gray-500"
                placeholder="Search articles..."
            />
        </form>
    );
}
