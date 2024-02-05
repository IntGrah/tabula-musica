import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-center">
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
    <Link className="w-20 sm:w-24 md:w-28 xl:w-32 py-3 text-center text-sm sm:text-sm xl:text-base transition-colors duration-500 text-cyan-800 hover:text-cyan-600 hover:bg-amber-100/40 tracking-wider" href={href}>
      {children}
    </Link>
  );
}
