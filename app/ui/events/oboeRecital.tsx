import Event from "./event";
import PoulencPortrait from "/public/poulenc-portrait.jpg";

export default function Event2() {
  return (
    <Event
      cutoff="max-lg:as-bg"
      imageProps={{
        src: PoulencPortrait,
        alt: "Pencil drawing of Francis Poulenc",
      }}
      date={new Date(2024, 1, 24, 13, 30)}
      href="/events"
      title="Oboe Recital"
      programme={[
        { composer: "Albinoni", pieces: "Concerto Op. 9 No. 2" },
        { composer: "Saint-Saëns", pieces: "Oboe Sonata" },
        { composer: "Poulenc", pieces: "Oboe Sonata" },
      ]}
      location="Trinity College Chapel, Cambridge"
    >
      Edward Clynes plays Albinoni&apos;s most famous Oboe concerto, and two
      French sonatas.
    </Event>
  );
}
