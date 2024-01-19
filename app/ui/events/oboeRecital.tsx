import Event from "./event";
import Poulenc from "/public/poulenc.jpg";

export default function Event2() {
  return (
    <Event
      cutoff="xl"
      imageProps={{ src: Poulenc, alt: "Pencil portrait of Francis Poulenc" }}
      date={new Date(2024, 1, 24)}
      href="/events"
      title="Oboe Recital"
      programme={[
        { composer: "Albinoni", pieces: "Concerto Op. 9 No. 2" },
        { composer: "Saint-Saëns", pieces: "Oboe Sonata" },
        {
          composer: "Poulenc",
          pieces: "Oboe Sonata",
        },
      ]}
      location="Trinity College Chapel, Cambridge"
    >
      Edward Clynes plays Albinoni's most famous concerto, and two french Oboe
      sonatas.
    </Event>
  );
}
