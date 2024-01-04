import { void_link } from "./util";

interface ButtonProps {
  name: string;
  text: string;
  href?: string;
}

export default function Button({ name, text, href = void_link }: ButtonProps) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-cy-600 hover:bg-gray-600/30"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {name}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{text}</p>
    </a>
  );
}
