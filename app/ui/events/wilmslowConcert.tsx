import Event from "./event";
import Spring from "/public/spring.jpg";

export default function WilmslowConcert() {
  return (
    <Event
      cutoff="max-lg:as-bg"
      src={Spring}
      alt="Watercolour depiction of Spring"
      date={new Date(2023, 5, 10, 19, 30)}
      href="/events"
      title="Tchaikovsky Piano Concerto No. 1"
      programme={[
        {
          composer: "Rossini",
          pieces: (
            <>
              <i>William Tell</i> Overture
            </>
          ),
        },
        { composer: "Tchaikovsky", pieces: "Piano Concerto No. 1" },
        { composer: "Glazunov", pieces: <i>The Seasons</i> },
      ]}
      location="Wilmslow Leisure Centre"
    >
      The Wilmslow Symphony Orchestra invites soloist Jeremy Chen for its 76th
      concert season.
    </Event>
  );
}
