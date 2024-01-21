import ClareChapel from "/public/clare-chapel.jpg";
import Event from "./event";

export default function ClareRecital() {
  return (
    <Event
      className="md:w-3/5"
      cutoff=""
      src={ClareChapel}
      alt="Clare College Chapel"
      date={new Date(2024, 0, 22, 13, 15)}
      title="Clare Lunchtime Recital"
      programme={
        <ol>
          <li>
            V. Williams - <i>Songs of Travel</i>
          </li>
          <li>
            Beethoven - <i>An die ferne Geliebte</i>
          </li>
        </ol>
      }
      performers={
        <ol>
          <li>Baritone - Eoin Jenkins</li>
          <li>Piano - Evie Perfect</li>
          <li>Baritone - Julian Manresa</li>
          <li>Piano - Isaac Chan</li>
        </ol>
      }
      location="Clare College Chapel, Cambridge"
    >
      The first lunchtime recital of Lent term at Clare Chapel.
    </Event>
  );
}
