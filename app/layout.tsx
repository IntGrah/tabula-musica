import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import Menu from "@/components/menu";
import Navigation from "@/components/navigation";

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en-GB">
            <head>
                <title>Tabula Musica</title>
            </head>
            <body className="relative flex flex-col min-h-screen font-serif bg-amber-200/20 scroll-smooth">
                <Header>
                    <div className="relative flex md:justify-center">
                        <Logo />
                        <Menu />
                    </div>
                    <Navigation />
                </Header>
                <div className="grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
