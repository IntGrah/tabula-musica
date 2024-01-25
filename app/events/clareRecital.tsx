import { ClareChapel as CC } from "./locations";
import Event from "./event";
import ClareChapel from "/public/clare-chapel.jpg";

export default function ClareRecital() {
  return (
    <Event
      basis="40%"
      cutoff="max-lg:as-bg"
      image={{ src: ClareChapel, alt: "Clare College Chapel" }}
      date={new Date(2024, 0, 29, 13, 15)}
      title="Clare Lunchtime Recital"
      programme={
        <ol>
          <li>Prokofiev - 5 Melodies</li>
          <li>Brahms - Violin Sonata No. 1</li>
        </ol>
      }
      performers={
        <ol>
          <li>Violin - John Gallant </li>
          <li>Piano - Raphael Herberg</li>
        </ol>
      }
      location={CC}
    >
      Weekly lunchtime recitals at Clare Chapel.
    </Event>
  );
}
