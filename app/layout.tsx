"use client";

import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isRoot = usePathname() === "/";

    const [solid, setSolid] = useState(false);
    // const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const onScroll = () => setSolid(scrollY >= 240);
        onScroll();
        // setOpacity(1);
        addEventListener("scroll", onScroll);
        return () => removeEventListener("scroll", onScroll);
    }, []);

    return (
        <html lang="en-GB" className="scroll-smooth">
            <head>
                <title>Tabula Musica</title>
            </head>
            <body className="relative flex flex-col min-h-screen font-serif bg-amber-200/20">
                <Header solid={!isRoot || solid} overlay={isRoot} />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
