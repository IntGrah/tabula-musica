import Liszt from "/public/liszt.jpg";
import Event from "./event";

export default function PianoRecital() {
  return (
    <Event
      cutoff="sm"
      imageProps={{ src: Liszt, alt: "Manuscript of Liszt Sonata" }}
      date={new Date(2024, 0, 29)}
      href="/events"
      title="Ravel | Chopin | Liszt"
      programme={[
        { composer: "Ravel", pieces: "Gaspard de la Nuit" },
        { composer: "Chopin", pieces: "Ballade No. 4" },
        { composer: "Liszt", pieces: "Sonata in B minor" },
      ]}
      location="Old Combination Room, Trinity College, Cambridge"
    >
      Trinity fresher Jeremy Chen presents three monumental works by post-1800
      masters.
    </Event>
  );
}
