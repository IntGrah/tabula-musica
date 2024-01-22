"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CSSProperties, useState } from "react";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
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
  src: StaticImageData;
  alt: string;
  date: Date;
  title: React.ReactNode;
  children: React.ReactNode;
  programme: React.ReactNode;
  performers: React.ReactNode;
  tickets?: {
    href: string;
    price: React.ReactNode;
  };
  location: React.ReactNode;
}

export default function Event({
  basis,
  cutoff,
  src,
  alt,
  date,
  title,
  children,
  programme,
  performers,
  tickets,
  location,
}: EventProps) {
  const [extra, setExtra] = useState(false);
  return (
    <div
      className="flex flex-grow relative min-w-80 h-96 group overflow-hidden cursor-pointer transition-all duration-500"
      style={{ flexBasis: basis }}
      onClick={() => setExtra(!extra)}
    >
      <div className="overflow-hidden">
        <Image
          className={`${cutoff} size-full object-cover transition-all duration-500 ease-out group-hover:scale-105`}
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
        <h1 className="py-2 text-2xl font-bold uppercase tracking-wider">
          {tickets ? (
            <Link className="decoration-2 hover:underline" href={tickets.href}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h1>
        <div className="tracking-wide">
          <p className="py-4">{children}</p>
          <div className="relative">
            <div
              className={`absolute transition-all duration-300 ${
                extra ? "-top-8 opacity-0" : "top-0"
              }`}
            >
              {programme}
            </div>
            <div
              className={`absolute transition-all duration-300 ${
                extra ? "top-0" : "top-8 opacity-0"
              }`}
            >
              {performers}
            </div>
          </div>
          <div className="absolute bottom-4 text-gray-300 text-sm">
            {tickets ? (
              <p>
                <a className="hover:underline" href={tickets.href}>
                  Tickets
                </a>
                : {tickets.price}
              </p>
            ) : (
              <p>Free admission</p>
            )}
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}
