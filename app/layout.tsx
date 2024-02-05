import "@/app/globals.css";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

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
        <main className="bg-gradient-radial from-amber-200/60 to-amber-100/50 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
