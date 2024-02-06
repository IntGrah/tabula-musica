import { EventCardProps } from "./event";
import Spring from "/public/spring.jpg";

export default {
  basis: "50%",
  cutoff: "max-lg:as-bg",
  image: { src: Spring, alt: "Watercolour depiction of Spring" },
  date: new Date(2023, 5, 10, 19, 30),
  title: "Tchaikovsky Piano Concerto No. 1",
  description: (
    <p>
      The Wilmslow Symphony Orchestra invites soloist Jeremy Chen for its 76th
      concert season.
    </p>
  ),
  programme: (
    <ol>
      <li>
        Rossini - <i>William Tell</i> Overture
      </li>
      ,<li>Tchaikovsky - Piano Concerto No. 1</li>,
      <li>
        Glazunov - <i>The Seasons</i>
      </li>
    </ol>
  ),
  performers: (
    <ol>
      <li>Wilmslow Symphony Orchestra</li>
      <li>Piano - Jeremy Chen</li>
      <li>Conductor - Stephen Threlfall</li>
    </ol>
  ),
  tickets:
    "https://www.ticketsource.co.uk/whats-on/wilmslow/the-evans-theatre-wilmslow-leisure-centre/wilmslow-symphony-orchestra-summer-concert/e-ororyq",
  admission: "£12 | £10 (Concessions) | £2 (Under 18)",
  location: {
    href: "https://maps.app.goo.gl/yZbJT9DaHBp1on6bA",
    name: "Wilmslow Leisure Centre",
  },
} as EventCardProps;
