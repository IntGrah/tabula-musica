import "@/app/globals.css";
import Header from "@/app/ui/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Tabula Musica</title>
      </head>
      <body>
        <Header />
        <main className="pt-20 bg-gradient-radial from-violet-200/60 to-black/30 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
