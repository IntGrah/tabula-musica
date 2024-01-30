import { WestRoad } from "./locations";
import Event from "./event";
import CCMS from "/public/ccms.jpg";

export default function CCMSConcert() {
  return (
    <Event
      basis="50%"
      cutoff="max-lg:as-bg"
      image={{ src: CCMS, alt: "Clare College Cartoon" }}
      date={new Date(2024, 1, 1, 20, 0)}
      title="CCMS Lent Concert"
      programme={
        <ol>
          <li>
            Prokofiev - Symphony No. 1 <q>Classical</q>
          </li>
          <li>W. A. Mozart - Horn Concerto No. 4</li>
          <li>
            V. Williams - <i>The Wasps: Overture</i>
          </li>
          <li>V. Williams - Five Mystical Songs</li>
          <li>
            H. Parry - <i>Blest Pair of Sirens</i>
          </li>
        </ol>
      }
      performers={
        <ol>
          <li>Clare College Orchestra</li>
          <li>Horn - Isaac Chan</li>
          <li>Baritone - Julian Manresa</li>
          <li>Mezzo-Soprano - Emma Caroe</li>
          <li>Soprano - Emma Paterson</li>
        </ol>
      }
      tickets={{
        href: "https://www.adcticketing.com/whats-on/concert/ccms-lent-term-concert",
        price: "£10, £6 (Concessions)",
      }}
      location={WestRoad}
    >
      Clare College Music Society returns to West Road Concert Hall with
      Prokofiev, Mozart and great English choral works.
    </Event>
  );
}
