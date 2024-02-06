"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Location } from "./locations";
import classNames from "classnames";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  hour12: true,
  minute: "2-digit",
};

interface EventProps {
  basis: string;
  cutoff: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  date: Date;
  title: React.ReactNode;
  children: React.ReactNode;
  programme: React.ReactNode;
  performers: React.ReactNode;
  tickets?: string;
  admission?: React.ReactNode;
  location: Location;
}

export default function Event({
  basis,
  cutoff,
  image,
  date,
  title,
  children,
  programme,
  performers,
  tickets,
  admission = "Free admission",
  location,
}: EventProps) {
  const [extra, setExtra] = useState(false);
  return (
    <div
      className="flex grow relative min-w-80 max-w-7xl h-96 group overflow-hidden cursor-pointer transition-all duration-500"
      style={{ flexBasis: basis }}
    >
      <div
        className={classNames("min-w-32", "h-full", cutoff, "overflow-hidden")}
      >
        <Image
          className="h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className="flex flex-col size-full min-w-80 px-4 py-4 z-10">
        <time
          className="text-gray-300 font-mono uppercase tracking-wider"
          dateTime={date.toISOString()}
        >
          {date
            .toLocaleDateString(undefined, dateTimeFormatOptions)
            .replaceAll(",", "")}
        </time>
        <h1 className="py-2 text-2xl font-bold uppercase tracking-wider">
          {tickets ? (
            <Link className="decoration-2 hover:underline" href={tickets}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h1>
        <p className="">{children}</p>
        <hr className="my-1 border-gray-300/10" />
        <div
          className="relative grow min-h-fit text-gray-200/90"
          onClick={() => setExtra(!extra)}
        >
          <div
            className={classNames(
              "absolute",
              "transition-all",
              "duration-300",
              { "-left-8 opacity-0": extra },
              { "left-0": !extra }
            )}
          >
            {programme}
          </div>
          <div
            className={classNames(
              "absolute",
              "transition-all",
              "duration-300",
              { "left-0": extra },
              { "left-8 opacity-0": !extra }
            )}
          >
            {performers}
          </div>
        </div>
        <hr className="my-1 border-gray-300/10" />
        <div className="text-gray-300 text-sm">
          <p>
            {tickets ? (
              <a className="hover:underline" href={tickets}>
                Tickets: {admission}
              </a>
            ) : (
              admission
            )}
          </p>
          <a className="hover:underline" href={location.href}>
            {location.name}
          </a>
        </div>
      </div>
    </div>
  );
}
