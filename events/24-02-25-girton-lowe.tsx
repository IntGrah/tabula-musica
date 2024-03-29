import { EventCardProps } from "@/components/event-card";
import { GirtonChapel } from "@/events/locations";
import Lowe from "@/public/lowe-ensemble.jpg";

export const summary: EventCardProps = {
    basis: "40%",
    cutoff: "max-xl:as-bg",
    image: { src: Lowe, alt: "Lowe Ensemble" },
    date: new Date(2024, 1, 25, 14, 30),
    title: "Lowe Ensemble",
    description: (
        <p>
            A Baroque ensemble comprising five siblings studying at Girton
            College, the Royal College of Music and Trinity Laban Conservatoire.
        </p>
    ),
    programme: (
        <ol>
            <li>Lully - Lorem Ipsum</li>
            <li>Leclair - Lorem Ipsum</li>
            <li>Rameau - Lorem Ipsum</li>
        </ol>
    ),
    performers: (
        <ol>
            <li>Violin, Viola - Joseph Lowe</li>
            <li>Violin - Gabriel Lowe</li>
            <li>Cello, Viola da gamba - Xavier Lowe</li>
            <li>Cello - Santiago Lowe</li>
            <li>Soprano, Harpsichord - Myriam Lowe</li>
        </ol>
    ),
    admission: "Free admission",
    location: GirtonChapel,
};
