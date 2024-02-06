import { EventCardProps } from "./event";
import { TrinityChapel } from "./locations";
import ChamberMusic from "/public/chamber-music.jpg";

export const summary: EventCardProps = {
  basis: "30%",
  cutoff: "max-xl:as-bg",
  image: { src: ChamberMusic, alt: "Pencil drawing of Francis Poulenc" },
  date: new Date(2024, 1, 24, 20, 0),
  title: "Oboe Recital",
  description: (
    <p>
      Edward Clynes plays Albinoni&apos;s D minor Oboe concerto, followed by
      Saint-Saëns and Poulenc Oboe sonatas.
    </p>
  ),
  programme: (
    <ol>
      <li>Albinoni - Oboe Concerto Op. 9 No. 2</li>
      <li>Saint-Saëns - Oboe Sonata</li>
      <li>Poulenc - Oboe Sonata</li>
    </ol>
  ),
  performers: (
    <ol>
      <li>Oboe - Edward Clynes</li>
      <li>Piano - Jeremy Chen</li>
    </ol>
  ),
  admission: "Free admission",
  location: TrinityChapel,
};
