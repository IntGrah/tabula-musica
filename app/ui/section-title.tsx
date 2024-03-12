import Link from "next/link";

export default function SectionTitle({ text }: { text: string }) {
    return (
        <div id={text} className="absolute -top-48 w-full h-48">
            <Link
                className="absolute bottom-0 w-full h-20 text-center text-4xl sm:text-5xl uppercase tracking-wider text-cyan-800/80 transition-colors underline decoration-transparent hover:decoration-cyan-800/80"
                href={"/" + text}
            >
                {text}
            </Link>
        </div>
    );
}
