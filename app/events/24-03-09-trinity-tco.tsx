import { TrinityChapel } from "./locations";
import Event from "./event";
import Moonrise from "/public/moonrise.jpg";

export default function TrinityTCO() {
  return (
    <Event
      basis="50%"
      cutoff="max-md:as-bg"
      image={{
        src: Moonrise,
        alt: "Moonrise over the Sea, Caspar David Friedrich",
      }}
      date={new Date(2024, 2, 9, 20, 0)}
      title="Trinity College Orchestra"
      programme={
        <ol>
          <li>Dvořák - Cello Concerto</li>
          <li>Tchaikovsky - Symphony No. 5</li>
        </ol>
      }
      performers={
        <ol>
          <li>Trinity College Orchestra</li>
          <li>Cello - Doraly Gill</li>
          <li>Conductor - Rhys Lewis</li>
        </ol>
      }
      location={TrinityChapel}
    >
      Trinity College Orchestra plays Dvořák and Tchaikovsky.
    </Event>
  );
}
