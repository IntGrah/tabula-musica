import { EventCardProps } from "./event";
import { ClareChapel } from "./locations";
import ClareChapelInterior from "/public/clare-chapel.jpg";

export const summary: EventCardProps = {
  basis: "40%",
  cutoff: "max-lg:as-bg",
  image: { src: ClareChapelInterior, alt: "Clare College Chapel" },
  date: new Date(2024, 0, 29, 13, 15),
  title: "Clare Lunchtime Recital",
  description: <p>Weekly lunchtime recitals at Clare Chapel.</p>,
  programme: (
    <ol>
      <li>Prokofiev - 5 Melodies</li>
      <li>Brahms - Violin Sonata No. 1 in G major</li>
    </ol>
  ),
  performers: (
    <ol>
      <li>Violin - John Gallant</li>
      <li>Piano - Raphael Herberg</li>
    </ol>
  ),
  admission: "Free admission",
  location: ClareChapel,
};
