import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between h-14 px-2 sm:px-4 text-gray-200 text-sm tracking-wider">
      <div className="flex-1"></div>
      <div className="flex-1 flex items-center justify-center">
        <NavLink href="/#home">Home</NavLink>
        <NavLink href="/#events">Events</NavLink>
        <NavLink href="/#articles">Articles</NavLink>
        <NavLink href="/#about">About</NavLink>
      </div>
      <Link
        className="flex-1 flex items-center justify-end transition-colors hover:text-white text-center"
        href="/#contact"
      >
        Contact
      </Link>
    </nav>
  );
}

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export function NavLink({ children, href }: LinkProps) {
  return (
    <Link
      className="flex-1 px-2 sm:px-4 py-4 transition-colors hover:text-white text-center"
      href={href}
    >
      {children}
    </Link>
  );
}
