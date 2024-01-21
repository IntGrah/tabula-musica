import Event from "./event";
import LisztSonata from "/public/liszt-sonata.jpg";

export default function PianoRecital() {
  return (
    <Event
      className="md:w-2/5"
      cutoff="max-2xl:as-bg"
      src={LisztSonata}
      alt="Manuscript of Liszt Sonata"
      date={new Date(2024, 0, 29, 19, 30)}
      title="Ravel, Chopin, Liszt"
      programme={
        <ol>
          <li>Ravel - Gaspard de la Nuit</li>
          <li>Chopin - Ballade No. 4</li>
          <li>Liszt - Sonata in B minor</li>
        </ol>
      }
      performers={<p>Piano - Jeremy Chen</p>}
      location="Old Combination Room, Trinity College, Cambridge"
    >
      Pianist Jeremy Chen presents three masterpieces of post-1800 composers.
    </Event>
  );
}
