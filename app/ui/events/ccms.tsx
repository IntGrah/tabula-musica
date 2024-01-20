import CCMS from "/public/ccms.jpg";
import Event from "./event";

export default function CCMSConcert() {
  return (
    <Event
      className="sm:w-2/3 lg:w-1/2 xl:w-3/5 2xl:w-1/2"
      cutoff="max-xl:as-bg"
      src={CCMS}
      alt="Clare College Cartoon with French Horn"
      date={new Date(2024, 1, 1, 20)}
      href="/events"
      title="CCMS Lent Concert"
      programme={[
        { composer: "Prokofiev", pieces: "Symphony No. 1" },
        { composer: "Mozart", pieces: "Horn Concerto No. 4" },
        { composer: "V. Williams", pieces: <i>The Wasps: Overture</i> },
        { composer: "V. Williams", pieces: "Five Mystical Songs" },
        { composer: "H. Parry", pieces: <i>Blest Pair of Sirens</i> },
      ]}
      location="West Road Concert Hall, Cambridge"
    >
      Clare College Music Society returns to West Road Concert Hall with a
      programme of Prokofiev, Mozart and great English choral works.
    </Event>
  );
}
