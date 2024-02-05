"use client";

import Link from "next/link";
import Navigation from "./navigation";
import { useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(window.scrollY);
  window.addEventListener("scroll", () => setScroll(window.scrollY));

  const scale = Math.min(scroll / 480, 1);
  const delay = Math.max(Math.min(scroll / 480 - 0.4, 1), 0);
  const font = Math.max(1 - scroll / 640, 0)

  return (
    <header
      className={`w-full fixed z-50 uppercase bg-amber-100`}
      style={{
        backgroundColor: `rgb(254 243 199 / ${0.8 * scale})`,
        backdropFilter: `blur(${delay * 4}px)`,
        boxShadow: `0 ${25 * delay}px ${50 * delay}px ${
          -12 * delay
        }px rgb(0 0 0 / 0.25)`,
      }}
    >
      <div className="py-3 text-center">
        <Link
          className="px-2 font-serif font-medium tracking-[0.2em] text-violet-900/95 rounded-lg hover:scale-105"
          href="/"
          style={{
            fontSize: `${30 + 16 * font}px`,
            lineHeight: `${36 + 16 * font}px`
          }}
        >
          Tabula Musica
        </Link>
      </div>
      <hr className="m-auto border-violet-900/80" style={{
        width: `${192 + 192 * font}px`
      }}/>
      <Navigation />
    </header>
  );
}
