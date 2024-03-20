import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-GB">
            <head>
                <title>Tabula Musica</title>
            </head>
            <body className="relative flex flex-col min-h-screen font-serif bg-amber-200/20 scroll-smooth">
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
