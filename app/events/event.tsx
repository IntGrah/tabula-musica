"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Location } from "./locations";
import classNames from "classnames";

export interface EventCardProps {
    basis: string;
    cutoff: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
    date: Date;
    title: React.ReactNode;
    description: React.ReactNode;
    programme: React.ReactNode;
    performers: React.ReactNode;
    tickets?: string;
    admission: React.ReactNode;
    location: Location;
}

export default function EventCard({
    props: {
        basis,
        cutoff,
        image,
        date,
        title,
        description,
        programme,
        performers,
        tickets,
        admission,
        location,
    },
}: {
    props: EventCardProps;
}) {
    const [extra, setExtra] = useState(false);
    const onClick = () => setExtra(!extra);

    return (
        <article
            className="flex grow relative min-w-80 max-w-7xl h-96 group overflow-hidden cursor-pointer transition-all duration-500"
            style={{ flexBasis: basis }}
        >
            <EventImage cutoff={cutoff} image={image} />
            <hgroup className="flex flex-col size-full min-w-80 px-4 py-4 z-10">
                <EventTime date={date} />
                <h3 className="py-2 text-2xl font-bold uppercase tracking-wider text-white">
                    {tickets ? (
                        <Link
                            className="decoration-2 hover:underline"
                            href={tickets}
                        >
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h3>
                <div className="text-white">{description}</div>
                <hr className="my-1 border-gray-300/10" />
                <EventInformation
                    onClick={onClick}
                    extra={extra}
                    programme={programme}
                    performers={performers}
                />
                <hr className="my-1 border-gray-300/10" />
                <div className="text-gray-300 text-sm">
                    <EventAdmission tickets={tickets} admission={admission} />
                    <EventLocation location={location} />
                </div>
            </hgroup>
        </article>
    );
}

function EventImage({
    cutoff,
    image,
}: {
    cutoff: string;
    image: { src: StaticImageData; alt: string };
}) {
    return (
        <div
            className={classNames(
                "min-w-32",
                "h-full",
                cutoff,
                "overflow-hidden"
            )}
        >
            <Image
                className="h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                src={image.src}
                alt={image.alt}
            />
        </div>
    );
}

function EventTime({ date }: { date: Date }) {
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        hour12: true,
        minute: "2-digit",
    };

    return (
        <time
            className="text-gray-300 font-mono uppercase tracking-wider"
            dateTime={date.toISOString()}
        >
            {date
                .toLocaleDateString(undefined, dateTimeFormatOptions)
                .replaceAll(",", "")}
        </time>
    );
}

function EventInformation({
    onClick,
    extra,
    programme,
    performers,
}: {
    onClick: () => void;
    extra: boolean;
    programme: React.ReactNode;
    performers: React.ReactNode;
}) {
    return (
        <div
            className="relative grow min-h-fit text-gray-200/90"
            onClick={onClick}
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
    );
}

function EventAdmission({
    tickets,
    admission,
}: {
    tickets?: string;
    admission: React.ReactNode;
}) {
    return (
        <p>
            {tickets ? (
                <a className="hover:underline" href={tickets}>
                    Tickets: {admission}
                </a>
            ) : (
                admission
            )}
        </p>
    );
}

function EventLocation({ location }: { location: Location }) {
    return (
        <a className="hover:underline" href={location.href}>
            {location.name}
        </a>
    );
}
