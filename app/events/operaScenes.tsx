import { ClareChapel } from "./locations";
import Event from "./event";
import Figaro from "/public/figaro.jpg";

export default function OperaScenes() {
  return (
    <Event
      basis="50%"
      cutoff="max-lg:as-bg"
      image={{ src: Figaro, alt: "The Marriage of Figaro" }}
      date={new Date(2024, 2, 9, 20, 0)}
      title="Mozart Opera Scenes Gala"
      programme={
        <ol>
          <li>
            W. A. Mozart - <i>Opera Scenes selection</i>
          </li>
        </ol>
      }
      performers={
        <ol>
          <li>Clare College Orchestra</li>
          <li>Director - Isaac Chan</li>
        </ol>
      }
      tickets={{
        href: "https://www.adcticketing.com/whats-on",
        price: "£10, £6 (Concessions)",
      }}
      location={ClareChapel}
    >
      Scenes from Mozart Operas.
    </Event>
  );
}
