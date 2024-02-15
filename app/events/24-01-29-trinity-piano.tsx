import { EventCardProps } from "./event";
import { TrinityOCR } from "./locations";
import LisztSonata from "/public/liszt-sonata-end.jpg";

export const summary: EventCardProps = {
    basis: "50%",
    cutoff: "max-xl:as-bg",
    image: { src: LisztSonata, alt: "Manuscript of Liszt Sonata" },
    date: new Date(2024, 0, 29, 20, 0),
    title: "Ravel, Chopin, Liszt",
    description: (
        <p>
            Pianist Jeremy Chen presents three masterpieces of post-1800
            composers.
        </p>
    ),
    programme: (
        <ol>
            <li>Ravel - Gaspard de la Nuit</li>
            <li>Chopin - Ballade No. 4</li>
            <li>Liszt - Sonata in B minor</li>
        </ol>
    ),
    performers: (
        <ol>
            <li>Piano - Jeremy Chen</li>
        </ol>
    ),
    admission: "Free admission",
    location: TrinityOCR,
};
