import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
};

interface ArticleProps {
  href: string;
  src: StaticImageData;
  alt: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  date: Date;
}

export default function Article({
  href,
  src,
  alt,
  title,
  subtitle,
  children,
  date,
}: ArticleProps) {
  return (
    <Link className="flex h-96 md:my-8 group" href={href}>
      <div className="w-[42rem] overflow-hidden">
        <Image
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={src}
          alt={alt}
        />
      </div>
      <div className="relative min-w-72 xl:max-w-2xl p-8 font-bold tracking-wider bg-gray-800/80">
        <h1 className="py-2 text-3xl sm:text-4xl text-white uppercase decoration-2 group-hover:underline">
          {title}
        </h1>
        <h2 className="py-2 text-lg sm:text-2xl text-gray-300">{subtitle}</h2>
        <div className="py-4 sm:text-lg tracking-wide">
          <p className="text-gray-300">{children}</p>
          <time
            className="absolute bottom-4 text-gray-400 font-mono uppercase tracking-wider"
            dateTime={date.toISOString()}
          >
            {date.toLocaleDateString(undefined, dateTimeFormatOptions)}
          </time>
        </div>
      </div>
    </Link>
  );
}
