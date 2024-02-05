export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <NavLink link="events">Events</NavLink>
      <NavLink link="articles">Articles</NavLink>
      <NavLink link="about">About</NavLink>
      <NavLink link="contact">Contact</NavLink>
    </nav>
  );
}

export function NavLink({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  const onClick = () => document.getElementById(link)!.scrollIntoView();

  return (
    <button
      className="w-20 sm:w-24 md:w-28 xl:w-32 py-3 text-center text-sm sm:text-base transition-colors duration-500 text-cyan-800 hover:text-cyan-600 hover:bg-amber-100/40 tracking-wider"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
