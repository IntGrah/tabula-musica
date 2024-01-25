import { ClareChapel } from "./locations";
import Event from "./event";
import Figaro from "/public/figaro.jpg";

export default function MozartOperaScenes() {
  return (
    <Event
      basis="60%"
      cutoff="max-sm:as-bg"
      image={{ src: Figaro, alt: "The Marriage of Figaro" }}
      date={new Date(2024, 2, 9, 20, 0)}
      title="Mozart Opera Scenes Gala"
      programme={
        <ol>
          <li>W. A. Mozart - Opera Scenes</li>
        </ol>
      }
      performers={
        <ol>
          <li>Clare College Music Society Orchestra</li>
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
