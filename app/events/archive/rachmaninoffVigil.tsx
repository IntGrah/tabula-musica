import { TrinityChapel } from "../locations";
import Event from "../event";
import Candles from "/public/candles.jpg";

export default function RachmaninoffVigil() {
  return (
    <Event
      basis="60%"
      cutoff="max-xs:as-bg"
      image={{ src: Candles, alt: "Candles" }}
      date={new Date(2024, 0, 27, 20, 30)}
      title="Rachmaninoff: All&#8209;Night&nbsp;Vigil"
      programme={
        <ol>
          <li>
            Rachmaninoff - <i>All&#8209;Night&nbsp;Vigil</i>
          </li>
        </ol>
      }
      performers={
        <ol>
          <li>Trinity College Music Society Orchestra</li>
        </ol>
      }
      tickets="https://www.eventbrite.com/e/rachmaninoff-all-night-vigil-tickets-790962037747"
      admission="Admission by donation only"
      location={TrinityChapel}
    >
      A performance of Sergei Rachmaninoff&apos;s stunning All-Night Vigil in
      support of Cambridge Women&apos;s Aid.
    </Event>
  );
}
