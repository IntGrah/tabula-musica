import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <div className="px-6 py-4 text-2xl rounded-xl transition-colors hover:bg-gray-600/30">
      <Link href={href}>{children}</Link>
    </div>
  );
}
