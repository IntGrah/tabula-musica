import Event from "./event";
import LisztSonata from "/public/liszt-sonata.jpg";

export default function PianoRecital() {
  return (
    <Event
      cutoff="max-2xl:as-bg"
      src={LisztSonata}
      alt="Manuscript of Liszt Sonata"
      date={new Date(2024, 0, 29, 13, 30)}
      href="/events"
      title="Ravel, Chopin, Liszt"
      programme={[
        { composer: "Ravel", pieces: "Gaspard de la Nuit" },
        { composer: "Chopin", pieces: "Ballade No. 4" },
        { composer: "Liszt", pieces: "Sonata in B minor" },
      ]}
      location="Old Combination Room, Trinity College, Cambridge"
    >
      Pianist Jeremy Chen presents three masterpieces of post-1800 composers.
    </Event>
  );
}
