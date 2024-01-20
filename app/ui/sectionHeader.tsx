interface SectionHeaderProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionHeader({ id, children }: SectionHeaderProps) {
  return (
    <h1
      id={id}
      className="absolute bottom-0 w-full p-8 text-center text-5xl md:text-6xl font-mono uppercase tracking-widest text-gray-500/50"
    >
      {children}
    </h1>
  );
}
