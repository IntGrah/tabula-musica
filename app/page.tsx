import Button from "./button";
import Logo from "./logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-950 from-10% via-indigo-950 via-40% to-teal-950 to-95% flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="https://github.com/IntGrah"
          className="fixed flex w-full border-b border-teal-300 bg-gradient-to-r from-teal-500 py-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          <code className="font-mono font-bold">...</code>
          <Image
            src="github-mark-white.svg"
            width={50}
            height={50}
            alt="Github logo"
          />
        </a>
        <Logo />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Button name="Lorem" text="Ipsum" />
        <Button name="Dolor" text="Sit" />
        <Button name="Amet" text="Consectetur" />
        <Button name="Adipiscing" text="Elit" />
      </div>
    </main>
  );
}
