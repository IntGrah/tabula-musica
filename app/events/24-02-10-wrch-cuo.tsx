import { EventCardProps } from "./event";
import { WRCH } from "./locations";
import Rachmaninoff from "/public/rachmaninoff-steinway.jpg";

export const summary: EventCardProps = {
  basis: "50%",
  cutoff: "max-2xl:as-bg",
  image: { src: Rachmaninoff, alt: "Rachmaninoff at Steinway Piano" },
  date: new Date(2024, 1, 10, 19, 30),
  title: "Rhapsody on a theme of Paganini",
  description: (
    <p>
      Two flagship University ensembles under the baton of Bertie Baigent, along
      with the 2022-2023 Concerto Competition winner, Madeleine Brown.
    </p>
  ),
  programme: (
    <ol>
      <li>
        Brahms - <i>Schicksalslied</i>
      </li>
      <li>
        Rachmaninoff - <i>Rhapsody on a theme of Paganini</i>
      </li>
      <li>Tchaikovsky - Symphony No. 5</li>
    </ol>
  ),
  performers: (
    <ol>
      <li>Cambridge University Orchestra</li>
      <li>Cambridge University Chamber Choir</li>
      <li>Piano - Madeleine Brown</li>
      <li>Conductor - Bertie Paigent</li>
    </ol>
  ),
  tickets:
    "https://www.saffronhall.com/choose-seats?instance: 175241AGRQBKQKLMHKSQPKLPPDSHPSLLH",
  admission: "£10 | £6 (Concessions)",
  location: WRCH,
};
