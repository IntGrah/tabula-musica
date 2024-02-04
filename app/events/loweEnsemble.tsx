import { TrinityChapel } from "./locations";
import Event from "./event";
import Lowe from "/public/lowe-ensemble.jpg";

export default function LoweEnsemble() {
  return (
    <Event
      basis="50%"
      cutoff="max-xl:as-bg"
      image={{ src: Lowe, alt: "Lowe Ensemble" }}
      date={new Date(2024, 1, 25, 14, 30)}
      title="Lowe Ensemble"
      programme={
        <ol>
          <li>Lully - Lorem Ipsum</li>
          <li>Leclair - Lorem Ipsum</li>
          <li>Rameau - Lorem Ipsum</li>
        </ol>
      }
      performers={
        <ol>
          <li>Violin, Viola - Joseph Lowe</li>
          <li>Violin - Gabriel Lowe</li>
          <li>Violoncello, Viola da gamba - Xavier Lowe</li>
          <li>Violoncello - Santiago Lowe</li>
          <li>Soprano, Harpsichord - Myriam Lowe</li>
        </ol>
      }
      location={TrinityChapel}
    >
      A Baroque ensemble comprising five siblings studying at Girton College,
      the Royal College of Music and Trinity Laban Conservatoire.
    </Event>
  );
}
