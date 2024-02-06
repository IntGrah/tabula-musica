"use client";

import Link from "next/link";
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

  const delayedScale = Math.max(Math.min(scroll / 480 - 0.4, 1), 0);
  const style: CSSProperties = {
    opacity,
    backgroundColor: `rgba(254, 243, 199, ${0.8 * Math.min(scroll / 480, 1)})`,
    backdropFilter: `blur(${delayedScale * 4}px)`,
    boxShadow: `0 ${24 * delayedScale}px ${48 * delayedScale}px ${
      -12 * delayedScale
    }px rgba(0, 0, 0, 0.25)`,
  };

  return (
    <header
      className="w-full fixed z-50 bg-amber-100 transition-opacity duration-500"
      style={style}
    >
      <LogoText fontScale={Math.min(scroll / 720, 1)} />
      <NavBar />
    </header>
  );
}

function LogoText({ fontScale }: { fontScale: number }) {
  return (
    <div className="relative py-3 text-center">
      <h1>
        <Link
          className="font-serif font-medium tracking-wider xs:tracking-widest sm:tracking-[0.2em] uppercase text-violet-900/95"
          href="/"
          style={{
            fontSize: 36 - 12 * fontScale,
            lineHeight: `${48 - 12 * fontScale}px`,
          }}
        >
          Tabula&nbsp;Musica
        </Link>
      </h1>
      <hr
        className="absolute bottom-0 m-auto w-64 border-violet-900/80"
        style={{
          left: `calc(50% - ${84 + 24 * fontScale}px)`,
          width: 168 + 48 * fontScale,
        }}
      />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex justify-center">
      <NavLink link="events">Events</NavLink>
      <NavLink link="articles">Articles</NavLink>
      <NavLink link="about">About</NavLink>
      <NavLink link="contact">Contact</NavLink>
    </nav>
  );
}

function NavLink({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  const onClick = () => document.getElementById(link)!.scrollIntoView();

  return (
    <button
      className="relative w-20 sm:w-24 md:w-28 xl:w-32 py-3 group"
      onClick={onClick}
    >
      <span className="text-sm sm:text-base tracking-wider text-cyan-800 group-hover:text-cyan-600">
        {children}
      </span>
      <hr className="absolute bottom-2 left-1/2 w-0 border-cyan-600/40 transition-all group-hover:left-[20%] group-hover:w-[60%]" />
    </button>
  );
}
