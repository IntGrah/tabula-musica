"use client";

import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isRoot = usePathname() === "/";

    return (
        <html lang="en-GB" className="scroll-smooth">
            <head>
                <title>Tabula Musica</title>
            </head>
            <body className="relative flex flex-col min-h-screen font-serif bg-amber-200/20">
                <Header overlay={isRoot} />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
