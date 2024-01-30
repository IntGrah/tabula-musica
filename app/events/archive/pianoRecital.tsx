import { TrinityOCR } from "../locations";
import Event from "../event";
import LisztSonata from "/public/liszt-sonata.jpg";

export default function PianoRecital() {
  return (
    <Event
      basis="50%"
      cutoff="max-xl:as-bg"
      image={{ src: LisztSonata, alt: "Manuscript of Liszt Sonata" }}
      date={new Date(2024, 0, 29, 20, 0)}
      title="Ravel, Chopin, Liszt"
      programme={
        <ol>
          <li>Ravel - Gaspard de la Nuit</li>
          <li>Chopin - Ballade No. 4</li>
          <li>Liszt - Sonata in B minor</li>
        </ol>
      }
      performers={<p>Piano - Jeremy Chen</p>}
      location={TrinityOCR}
    >
      Pianist Jeremy Chen presents three masterpieces of post-1800 composers.
    </Event>
  );
}
