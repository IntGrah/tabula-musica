import Event from "./event";
import Spring from "/public/spring.jpg";

export default function WilmslowConcert() {
  return (
    <Event
      basis="50%"
      cutoff="max-lg:as-bg"
      image={{ src: Spring, alt: "Watercolour depiction of Spring" }}
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
          <li>Conductor - Stephen Threlfall</li>
        </ol>
      }
      tickets={{
        href: "https://www.ticketsource.co.uk/whats-on/wilmslow/the-evans-theatre-wilmslow-leisure-centre/wilmslow-symphony-orchestra-summer-concert/e-ororyq",
        price: "£12, £10 (Concessions) £2 (Under 18)",
      }}
      location="Wilmslow Leisure Centre"
    >
      The Wilmslow Symphony Orchestra invites soloist Jeremy Chen for its 76th
      concert season.
    </Event>
  );
}
