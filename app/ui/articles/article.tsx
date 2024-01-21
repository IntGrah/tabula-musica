import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric"
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
    <Link className="flex w-auto h-96 md:my-8 group" href={href}>
      <div className="max-w-96 overflow-hidden">
        <Image
          className="h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={src}
          alt={alt}
        />
      </div>
      <div className="relative max-xl:w-full min-w-72 xl:max-w-2xl xl:rounded-r-3xl p-8 font-bold tracking-wider bg-gradient-to-bl from-gray-600 to-gray-500">
        <h1 className="py-2 text-3xl sm:text-4xl text-white uppercase decoration-2 hover:underline">
          {title}
        </h1>
        <h2 className="py-4 text-lg sm:text-2xl text-gray-300">{subtitle}</h2>
        <div className="sm:text-lg text-white font-mono tracking-wide overflow-ellipsis">
          {children}
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
