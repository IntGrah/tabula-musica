"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  hour12: true,
  minute: "2-digit",
};

interface EventProps {
  className: string;
  cutoff: string;
  src: StaticImageData;
  alt: string;
  date: Date;
  title: React.ReactNode;
  children: React.ReactNode;
  programme: React.ReactNode;
  performers: React.ReactNode;
  location: React.ReactNode;
}

export default function Event({
  className,
  cutoff,
  src,
  alt,
  date,
  title,
  children,
  programme,
  performers,
  location,
}: EventProps) {
  const [extra, setExtra] = useState(false);
  return (
    <div
      className={`flex relative w-full ${className} h-96 group overflow-hidden cursor-pointer transition-all duration-500`}
      onClick={() => setExtra(!extra)}
    >
      <div className="overflow-hidden">
        <Image
          className={`${cutoff} ${
            extra ? "as-bg" : ""
          } size-full object-cover transition-all duration-500 ease-out group-hover:scale-105`}
          src={src}
          alt={alt}
        />
      </div>
      <div className="relative min-w-80 h-full p-4 z-10">
        <time
          className="text-gray-300 font-mono uppercase tracking-wider"
          dateTime={date.toISOString()}
        >
          {date.toLocaleDateString(undefined, dateTimeFormatOptions)}
        </time>
        <h1 className="w-full py-2 text-2xl font-bold uppercase tracking-wider decoration-2 group-hover:underline">
          {title}
        </h1>
        <div className="flex flex-col gap-4 w-full tracking-wide">
          <p>{children}</p>
          {programme}
          {extra && performers}
          <p className="absolute bottom-4 text-gray-300 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}