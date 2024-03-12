import "./globals.css";
import Footer from "./ui/footer";

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
            <body className="flex flex-col min-h-screen bg-amber-200/20">
                {children}
                <Footer />
            </body>
        </html>
    );
}
