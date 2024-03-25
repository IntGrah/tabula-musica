"use client";

import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import Restrict from "@/components/util/restrict";

export default function Header({ children }: React.PropsWithChildren) {
    const root = usePathname() === "/";
    const [solid, setSolid] = useState(true);

    useEffect(() => {
        const onScroll = () => setSolid(!root || scrollY >= 240);
        onScroll();
        addEventListener("scroll", onScroll);
        return () => removeEventListener("scroll", onScroll);
    }, [root]);

    const bgStyle: CSSProperties = {
        backgroundColor: `rgba(254, 243, 199, ${solid ? 0.8 : 0})`,
        backdropFilter: solid ? "blur(4px)" : "none",
        boxShadow: solid ? "0 2px 12px rgba(0, 0, 0, 0.2)" : "none",
        position: root ? "fixed" : "sticky",
    };

    return (
        <header
            className="top-0 w-full z-50 font-serif transition-all duration-500"
            style={bgStyle}
        >
            <Restrict>{children}</Restrict>
        </header>
    );
}
