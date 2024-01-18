import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex h-14 px-8 bg-black text-white font-bold font-mono border-b border-slate-900">
      <div className="flex-1 flex items-center justify-start text-xl">
        <Link href="/">INTGRAH.</Link>
      </div>
      <div className="flex-1 flex items-center justify-center gap-10 text-lg">
          <Link href="">About</Link>
          <Link href="">Events</Link>
          <Link href="">Other</Link>
      </div>
      <div className="flex-1 flex items-center justify-end text-lg">
        <Link href="">Lol</Link>
      </div>
    </nav>
  );
}
