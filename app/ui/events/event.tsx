import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface EventProps {
  cutoff: "sm" | "md" | "lg" | "xl";
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
    <div className="flex relative size-full">
      <Image
        className={`absolute ${cutoff}:static size-full object-cover max-${cutoff}:opacity-20`}
        {...imageProps}
      />
      <div className="h-full p-4 z-10">
        <time
          className="text-gray-400 text-sm font-mono uppercase tracking-wider"
          dateTime={date.toISOString()}
        >
          {date.toLocaleDateString(undefined, { dateStyle: "medium" })}
        </time>
        <h1 className="py-2 text-2xl font-bold uppercase tracking-wider">
          <Link className="decoration-2 hover:underline" href={href}>
            {title}
          </Link>
        </h1>
        <div>
          <p className="tracking-wide">{children}</p>
          <ol className="py-2 font tracking-wide">
            {programme.map(({ composer, pieces }) => (
              <li>
                {composer} &ndash; {pieces}
              </li>
            ))}
          </ol>
          <p className="text-gray-400 text-sm tracking-wide">{location}</p>
        </div>
      </div>
    </div>
  );
}
