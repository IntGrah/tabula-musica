import { TrinityChapel } from "./locations";
import Event from "./event";
import TrinityChapelInterior from "/public/trinity-chapel.jpg";

export default function TrinityOrgan() {
  return (
    <Event
      basis="40%"
      cutoff="max-lg:as-bg"
      image={{ src: TrinityChapelInterior, alt: "Trinity College Chapel" }}
      date={new Date(2024, 0, 29, 13, 15)}
      title="Clare Lunchtime Recital"
      programme={
        <ol>
          <li>
            Pachelbel - <i>Hexachordum Apollinis: Aria Sebaldina</i>
          </li>
          <li>Byrd - Jhon come kisse me now</li>
          <li>
            Bach - Partita diverse sopre il Corale O Gott, du frommer Gott
          </li>
        </ol>
      }
      performers={
        <ol>
          <li>Violin - John Gallant </li>
          <li>Piano - Raphael Herberg</li>
        </ol>
      }
      location={TrinityChapel}
    >
      Weekly lunchtime recitals at Clare Chapel.
    </Event>
  );
}
