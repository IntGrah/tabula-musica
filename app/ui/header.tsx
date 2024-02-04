import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="w-full fixed z-50 bg-gray-700 uppercase">
      <div className="mt-2 text-center tracking-widest text-orange-200/70">
        <Link href="/">Tabula Musica</Link>
      </div>
      <Navigation />
    </header>
  );
}
