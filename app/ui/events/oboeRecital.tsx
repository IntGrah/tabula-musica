import Event from "./event";
import PoulencPortrait from "/public/poulenc-portrait.jpg";

export default function OboeRecital() {
  return (
    <Event
      className="sm:w-1/3 lg:w-1/2 xl:w-2/5 2xl:w-1/2"
      cutoff="max-lg:as-bg"
      src={PoulencPortrait}
      alt="Pencil drawing of Francis Poulenc"
      date={new Date(2024, 1, 24, 13, 30)}
      title="Oboe Recital"
      programme={
        <ol>
          <li>Albinoni - Concerto Op. 9 No. 2</li>
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
      location="Trinity College Chapel, Cambridge"
    >
      Edward Clynes plays Albinoni&apos;s most famous Oboe concerto, and two
      French sonatas.
    </Event>
  );
}
