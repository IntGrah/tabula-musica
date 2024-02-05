import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex md:gap-4 xl:gap-8 justify-center transition-colors duration-500 hover:bg-amber-100/40">
      <NavLink href="/#home">Home</NavLink>
      <NavLink href="/#events">Events</NavLink>
      <NavLink href="/#articles">Articles</NavLink>
      <NavLink href="/#about">About</NavLink>
      <NavLink href="/#contact">Contact</NavLink>
    </nav>
  );
}

export function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link className="w-24 py-3 text-center text-sm sm:text-sm xl:text-base transition-colors text-cyan-800 hover:text-cyan-600 tracking-wider" href={href}>
      {children}
    </Link>
  );
}
