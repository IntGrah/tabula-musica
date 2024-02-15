import { EventCardProps } from "./event";
import { ClareChapel } from "./locations";
import Figaro from "/public/figaro.jpg";

export const summary: EventCardProps = {
  basis: "50%",
  cutoff: "max-md:as-bg",
  image: { src: Figaro, alt: "The Marriage of Figaro" },
  date: new Date(2024, 2, 9, 20, 0),
  title: "Mozart Opera Scenes Gala",
  description: <p>Scenes from Mozart Operas.</p>,
  programme: (
    <ol>
      <li>
        <i>Selections from</i>
      </li>
      <li>
        W. A. Mozart - <i>Don Giovanni</i>
      </li>
      <li>
        W. A. Mozart - <i>The Marriage of Figaro</i>
      </li>
    </ol>
  ),
  performers: (
    <ol>
      <li>Clare College Orchestra</li>
      <li>Director - Isaac Chan</li>
    </ol>
  ),
  tickets: "https://www.adcticketing.com/whats-on",
  admission: "£10 | £6 (Concessions)",
  location: ClareChapel,
};
