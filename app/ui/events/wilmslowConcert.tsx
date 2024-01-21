import Event from "./event";
import Spring from "/public/spring.jpg";

export default function WilmslowConcert() {
  return (
    <Event
      className="w-full"
      cutoff="max-lg:as-bg"
      src={Spring}
      alt="Watercolour depiction of Spring"
      date={new Date(2023, 5, 10, 19, 30)}
      title="Tchaikovsky Piano Concerto No. 1"
      programme={
        <ol>
          <li>
            Rossini - <i>William Tell</i> Overture
          </li>
          <li>Tchaikovsky - Piano Concerto No. 1</li>
          <li>
            Glazunov - <i>The Seasons</i>
          </li>
        </ol>
      }
      performers={
        <ol>
          <li>Wilmslow Symphony Orchestra</li>
          <li>Piano - Jeremy Chen</li>
        </ol>
      }
      location="Wilmslow Leisure Centre"
    >
      The Wilmslow Symphony Orchestra invites soloist Jeremy Chen for its 76th
      concert season.
    </Event>
  );
}
