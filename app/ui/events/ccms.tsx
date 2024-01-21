import CCMS from "/public/ccms.jpg";
import Event from "./event";

export default function CCMSConcert() {
  return (
    <Event
      className="sm:w-2/3 lg:w-1/2 xl:w-3/5 2xl:w-1/2"
      cutoff="max-xl:as-bg"
      src={CCMS}
      alt="Clare College Cartoon"
      date={new Date(2024, 1, 1, 20, 0)}
      title="CCMS Lent Term Concert"
      programme={
        <ol>
          <li>Prokofiev - Symphony No. 1</li>
          <li>Mozart - Horn Concerto No. 4</li>
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
          <li>Clare College Music Society Orchestra</li>
          <li>Horn - Isaac Chan</li>
          <li>Baritone - Julian Manresa</li>
          <li>Mezzo-Soprano - Emma Caroe</li>
          <li>Soprano - Emma Paterson</li>
        </ol>
      }
      location="West Road Concert Hall, Cambridge"
    >
      Clare College Music Society returns to West Road Concert Hall with a
      programme of Prokofiev, Mozart and great English choral works.
    </Event>
  );
}
