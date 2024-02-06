import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Subtitle from "./ui/subtitle";
import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <head>
        <title>Tabula Musica</title>
      </head>
      <body>
        <Header />
        <div className="relative h-96 md:h-[28rem]">
          <Image
            className="size-full object-cover opacity-20"
            src={DieKunstDerFuge}
            alt="Manuscript of The Art of Fugue"
          />
          <Subtitle />
        </div>
        <main className="bg-gradient-radial from-amber-200/60 to-amber-100/50 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
