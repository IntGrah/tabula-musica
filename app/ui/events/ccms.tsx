import Liszt from "/public/liszt.jpg";
import Event from "./event";

export default function CCMSConcert() {
  return (
    <Event
      cutoff="xl"
      imageProps={{ src: Liszt, alt: "Manuscript of Liszt Sonata" }}
      date={new Date(2024, 1, 1)}
      href="/events"
      title="CCMS Lent term concert"
      programme={[
        { composer: "Prokofiev", pieces: "Symphony No. 1" },
        { composer: "Mozart", pieces: "Horn Concerto No. 4" },
        {
          composer: "Vaughan Williams",
          pieces: (
            <>
              <i>The Wasps: Overture</i>, Five Mystical Songs
            </>
          ),
        },
        { composer: "Hubert Parry", pieces: <i>Blest Pair of Sirens</i> },
      ]}
      location="West Road Concert Hall, Cambridge"
    >
      Clare College Music Society returns to West Road Concert Hall with a
      programme of Prokofiev, Mozart and great English choral works.
    </Event>
  );
}
