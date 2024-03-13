"use client";

import { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import TabulaMusica from "@/public/tabula-musica.png";

const style: CSSProperties = { fontVariant: "small-caps" };

export default function Subtitle() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="absolute top-0 size-60 p-8 pt-32 border-l-8 border-l-violet-900/80">
            <div style={{ opacity: 1 - scroll / 120 }}>
                <h3
                    className="text-lg tracking-widest text-violet-900/90"
                    style={style}
                >
                    Cambridge-Based
                </h3>
                <div className="tracking-wider text-violet-900/90">
                    <Image
                        className="float-left"
                        src={TabulaMusica}
                        alt="Logo"
                        width={40}
                    />
                    <h4>Music Magazine</h4>
                    <h5 className="text-sm text-violet-900/50" style={style}>
                        Est. 2023
                    </h5>
                </div>
            </div>
        </div>
    );
}
