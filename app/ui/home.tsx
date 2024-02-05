"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TabulaMusica from "/public/tabula-musica.png";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div
      className="absolute top-0 p-8 pt-32 border-l-8 border-violet-900"
      style={{ opacity: 1 - scroll / 120 }}
    >
      <h1 className="text-lg uppercase tracking-wider text-violet-900/90">
        Cambridge-Based
      </h1>
      <h2 className="text-sm tracking-wider text-violet-900/90">
        <Image
          className="float-left"
          src={TabulaMusica}
          alt="Logo"
          width={40}
        />
        Music Magazine
        <br />
        <span className="text-violet-900/50">Est. 2023</span>
      </h2>
    </div>
  );
}
