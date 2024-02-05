"use client";

import Link from "next/link";
import Navigation from "./navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const delay = Math.max(Math.min(scroll / 480 - 0.4, 1), 0);
  const font = Math.min(scroll / 720, 1);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed z-50 uppercase bg-amber-100`}
      style={{
        backgroundColor: `rgb(254 243 199 / ${0.8 * Math.min(scroll / 480, 1)})`,
        backdropFilter: `blur(${delay * 4}px)`,
        boxShadow: `0 ${25 * delay}px ${50 * delay}px ${
          -12 * delay
        }px rgb(0 0 0 / 0.25)`,
      }}
    >
      <div className="py-3 text-center">
        <Link
          className="px-2 font-serif font-medium tracking-wider xs:tracking-widest sm:tracking-[0.2em] text-violet-900/95 rounded-lg hover:scale-105"
          href="/"
          style={{
            fontSize: 36 - 12 * font,
            lineHeight: `${44 - 12 * font}px`,
          }}
        >
          Tabula&nbsp;Musica
        </Link>
      </div>
      <hr
        className="m-auto border-violet-900/80"
        style={{
          width: 168 + 48 * font,
        }}
      />
      <Navigation />
    </header>
  );
}
