import Image, { ImageProps } from "next/image";
import Link from "next/link";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  hour12: true,
  minute: "2-digit",
};

interface EventProps {
  cutoff: string;
  imageProps: ImageProps;
  date: Date;
  href: string;
  title: string;
  children: React.ReactNode;
  programme: Array<{ composer: string; pieces: React.ReactNode }>;
  location: string;
}

export default function Event({
  cutoff,
  imageProps,
  date,
  href,
  title,
  children,
  programme,
  location,
}: EventProps) {
  return (
    <Link className="flex relative h-96 group overflow-hidden" href={href}>
      <div className="overflow-hidden">
        <Image
          className={`${cutoff} size-full object-cover transition-all duration-500 group-hover:scale-105`}
          {...imageProps}
        />
      </div>
      <div className="relative min-w-72 h-full p-4 z-10">
        <time
          className="text-gray-300/90 font-mono uppercase tracking-wider"
          dateTime={date.toISOString()}
        >
          {date.toLocaleDateString(undefined, dateTimeFormatOptions)}
        </time>
        <h1 className="py-2 text-2xl font-bold uppercase tracking-wider decoration-2 group-hover:underline">
          {title}
        </h1>
        <div className="tracking-wide">
          <p>{children}</p>
          <ol className="py-4">
            {programme.map(({ composer, pieces }) => (
              <li>
                {composer} &ndash; {pieces}
              </li>
            ))}
          </ol>
          <p className="absolute bottom-4 text-gray-300/90 text-sm">{location}</p>
        </div>
      </div>
    </Link>
  );
}
