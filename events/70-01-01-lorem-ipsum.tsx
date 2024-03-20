import { EventCardProps } from "@/components/event-card";
import RiteOfSpring from "@/public/rite-of-spring.jpg";

export const summary: EventCardProps = {
    basis: "40%",
    cutoff: "max-xl:as-bg",
    image: { src: RiteOfSpring, alt: "Manuscript of Rite of Spring" },
    date: new Date(1970, 0, 1, 0, 0),
    title: "Lorem Ipsum",
    description: (
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et hic
            alias, incidunt saepe id minus ex est tempore accusantium fugiat
            dolore deserunt sed esse dolor.
        </p>
    ),
    programme: (
        <ol>
            <li>Ablus - Voluptatibus</li>
            <li>
                Belirem - <i>Numquam Quis</i> No. 4
            </li>
            <li>Cieque - Nihilis sequitur</li>
        </ol>
    ),
    performers: (
        <ol>
            <li>Rationa - Dormos</li>
            <li>Valis de sinistre - Equistri</li>
            <li>Provicare Minus - Fidus Estus</li>
        </ol>
    ),
    admission: "Free admission",
    location: { name: "Lomanus Itacus", href: "" },
};
