import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="w-full fixed z-50 bg-gray-700/80 backdrop-blur-[2px] uppercase">
      <div className="mt-4 text-center tracking-widest text-orange-200/70">
        Jeremy Chen
      </div>
      <Navigation />
    </header>
  );
}
