import { WRCH } from "./locations";
import Event from "./event";
import Rachmaninoff from "/public/rachmaninoff-steinway.jpg";

export default function WRCHCUO() {
  return (
    <Event
      basis="50%"
      cutoff="max-2xl:as-bg"
      image={{ src: Rachmaninoff, alt: "Rachmaninoff at Steinway Piano" }}
      date={new Date(2024, 1, 10, 19, 30)}
      title="Rhapsody on a theme of Paganini"
      programme={
        <ol>
          <li>
            Brahms - <i>Schicksalslied</i>
          </li>
          <li>
            Rachmaninoff - <i>Rhapsody on a theme of Paganini</i>
          </li>
          <li>Tchaikovsky - Symphony No. 5</li>
        </ol>
      }
      performers={
        <ol>
          <li>Cambridge University Orchestra</li>
          <li>Cambridge University Chamber Choir</li>
          <li>Piano - Madeleine Brown</li>
          <li>Conductor - Bertie Paigent</li>
        </ol>
      }
      tickets="https://www.cmp.cam.ac.uk/rhapsody"
      admission="£10, £6 (Concessions)"
      location={WRCH}
    >
      Two flagship University ensembles join under the baton of Bertie Baigent
      along with the winner of the 2022-2023 Concerto Competition, Madeleine
      Brown.
    </Event>
  );
}
