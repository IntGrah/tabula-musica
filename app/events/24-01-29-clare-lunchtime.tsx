import { ClareChapel } from "./locations";
import Event from "./event";
import ClareChapelInterior from "/public/clare-chapel.jpg";

export default function ClareLunchtime() {
  return (
    <Event
      basis="40%"
      cutoff="max-lg:as-bg"
      image={{ src: ClareChapelInterior, alt: "Clare College Chapel" }}
      date={new Date(2024, 0, 29, 13, 15)}
      title="Clare Lunchtime Recital"
      programme={
        <ol>
          <li>Prokofiev - 5 Melodies</li>
          <li>Brahms - Violin Sonata No. 1 in G major</li>
        </ol>
      }
      performers={
        <ol>
          <li>Violin - John Gallant </li>
          <li>Piano - Raphael Herberg</li>
        </ol>
      }
      location={ClareChapel}
    >
      Weekly lunchtime recitals at Clare Chapel.
    </Event>
  );
}
