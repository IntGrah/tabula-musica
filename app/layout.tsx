import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Subtitle from "./ui/subtitle";
import Image from "next/image";
import ArtOfFugue from "/public/art-of-fugue.jpg";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-GB" className="scroll-smooth">
            <head>
                <title>Tabula Musica</title>
            </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <div className="relative h-96 md:h-[28rem]">
                    <Image
                        className="size-full object-cover opacity-20"
                        src={ArtOfFugue}
                        alt="Manuscript of The Art of Fugue"
                    />
                    <Subtitle />
                </div>
                <main className="grow bg-amber-200/40">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
