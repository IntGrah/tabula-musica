interface SectionHeaderProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionHeader({ id, children }: SectionHeaderProps) {
  return (
    <div id={id} className="size-full absolute bottom-0">
      <h1 className="absolute w-full bottom-0 py-8 text-center text-4xl md:text-5xl font-serif uppercase tracking-wider text-cyan-800/80">
        {children}
      </h1>
    </div>
  );
}
