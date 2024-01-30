import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex md:gap-4 xl:gap-8 justify-center h-12 text-gray-200 text-xs sm:text-sm xl:text-base tracking-wider text-center">
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
    <Link className="w-24 py-4 transition-colors hover:text-white" href={href}>
      {children}
    </Link>
  );
}
