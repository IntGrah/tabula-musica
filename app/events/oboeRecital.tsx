import { TrinityChapel } from "./locations";
import Event from "./event";
import PoulencPortrait from "/public/poulenc-portrait.jpg";

export default function OboeRecital() {
  return (
    <Event
      basis="40%"
      cutoff="max-xl:as-bg"
      src={PoulencPortrait}
      alt="Pencil drawing of Francis Poulenc"
      date={new Date(2024, 1, 24, 20, 0)}
      title="Oboe Recital"
      programme={
        <ol>
          <li>Albinoni - Oboe Concerto Op. 9 No. 2</li>
          <li>Saint-Saëns - Oboe Sonata</li>
          <li>Poulenc - Oboe Sonata</li>
        </ol>
      }
      performers={
        <ol>
          <li>Oboe - Edward Clynes</li>
          <li>Piano, Harpsichord - Jeremy Chen</li>
        </ol>
      }
      location={TrinityChapel}
    >
      Edward Clynes plays Albinoni&apos;s most famous Oboe concerto, and two
      French sonatas.
    </Event>
  );
}
