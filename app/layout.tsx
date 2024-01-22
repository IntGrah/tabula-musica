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
        <title>IntGrah &ndash; Page</title>
      </head>
      <body>
        <Header />
        <div className="pt-24 bg-gradient-radial from-violet-200/60 to-black/30 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
