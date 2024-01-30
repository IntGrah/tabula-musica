"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  tickets?: {
    href: string;
    price: React.ReactNode;
  };
  location: React.ReactNode;
}

export default function Event({
  basis,
  cutoff,
  image: { src, alt },
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
      className="flex grow relative min-w-80 h-96 group overflow-hidden cursor-pointer transition-all duration-500"
      style={{ flexBasis: basis }}
    >
      <div className="overflow-hidden">
        <Image
          className={`${cutoff} h-full object-cover transition-all duration-500 ease-out group-hover:scale-105`}
          src={src}
          alt={alt}
        />
      </div>
      <div
        className="relative min-w-72 p-4 z-10"
        onClick={() => setExtra(!extra)}
      >
        <time
          className="text-gray-300 font-mono uppercase tracking-wider"
          dateTime={date.toISOString()}
        >
          {date.toLocaleDateString(undefined, dateTimeFormatOptions)}
        </time>
        <h1 className="py-1 text-2xl font-bold uppercase tracking-wider">
          {tickets ? (
            <Link className="decoration-2 hover:underline" href={tickets.href}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h1>
        <p className="py-1 tracking-wide">{children}</p>
        <div className="relative text-gray-200">
          <div
            className={`absolute transition-all duration-300 ${
              extra ? "-left-8 opacity-0" : "left-0"
            }`}
          >
            {programme}
          </div>
          <div
            className={`absolute transition-all duration-300 ${
              extra ? "left-0" : "left-8 opacity-0"
            }`}
          >
            {performers}
          </div>
        </div>
        <div className="absolute bottom-4 text-gray-300 text-sm">
          {tickets ? (
            <p>
              <a className="hover:underline" href={tickets.href}>
                Tickets: {tickets.price}
              </a>
            </p>
          ) : (
            <p>Free admission</p>
          )}
          {location}
        </div>
      </div>
    </div>
  );
}
