"use client";

import Link from "next/link";
import Navigation from "./navigation";
import { useState } from "react";

export default function Header() {
  
  const [scroll, setScroll] = typeof window !== "undefined" ? useState(window.scrollY) : [0, () => {}];
  if (typeof window !== 'undefined')
    window.addEventListener("scroll", () => setScroll(window.scrollY));

  const scale = Math.min(scroll / 480, 1);
  const delay = Math.max(Math.min(scroll / 480 - 0.4, 1), 0);

  return (
    <header
      className={`w-full fixed z-50 uppercase bg-amber-100`}
      style={{
        backgroundColor: `rgb(254 243 199 / ${0.8 * scale})`,
        backdropFilter: `blur(${delay * 4}px)`,
        boxShadow: `0 ${25 * delay}px ${50 * delay}px ${-12 * delay}px rgb(0 0 0 / 0.25)`
      }}
    >
      <div className="py-3 text-center">
        <Link
          className="px-2 font-serif font-medium text-3xl tracking-[0.2em] text-violet-900/80 rounded-lg transition-colors duration-500 hover:bg-amber-100/30"
          href="/"
        >
          Tabula Musica
        </Link>
      </div>
      <hr className="m-auto w-48 border-violet-900/80" />
      <Navigation />
    </header>
  );
}
