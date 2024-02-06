import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
};

export interface ArticleSummaryProps {
  href: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  date: Date;
}

export default function ArticleSummary({
  props: { href, image, title, subtitle, description, date },
}: {
  props: ArticleSummaryProps;
}) {
  return (
    <article className="flex grow w-full max-w-7xl h-96 shadow-2xl group cursor-pointer">
      <div className="w-[42rem] overflow-hidden">
        <Image
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className="relative p-8 tracking-wider bg-gradient-to-r from-amber-950/95 to-amber-950/90">
        <h1 className="py-2">
          <Link
            className="text-3xl sm:text-4xl font-semibold text-white hover:underline"
            href={href}
          >
            {title}
          </Link>
        </h1>
        <h2 className="py-2 text-lg sm:text-2xl text-gray-200/90">
          {subtitle}
        </h2>
        <div className="py-4 sm:text-lg tracking-wide">
          <p className="text-gray-200/90">{description}</p>
          <time
            className="absolute bottom-4 text-gray-300 font-mono tracking-wider"
            dateTime={date.toISOString()}
          >
            {date.toLocaleDateString(undefined, dateTimeFormatOptions)}
          </time>
        </div>
      </div>
    </article>
  );
}
