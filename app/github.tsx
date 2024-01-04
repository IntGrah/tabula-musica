import Image from "next/image";

export default function Github() {
    return (
      <a
        href="https://github.com/IntGrah"
        className="flex m-0 px-8 py-4 h-full w-full lg:rounded-xl lg:w-auto lg:border lg:border-teal-900 hover:border-gray-400 transition-colors duration-300 bg-gradient-to-r from-purple-700 to-teal-800 backdrop-blur-2xl"
      >
        <Image
          src="github-mark-white.svg"
          width={48}
          height={48}
          alt="Github logo"
        />
      </a>
    );
}