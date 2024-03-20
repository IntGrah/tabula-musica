import { EventCardProps } from "@/components/event-card";
import { WRCH } from "@/events/locations";
import ClareCollegeCartoon from "@/public/clare-cartoon.jpg";

export const summary: EventCardProps = {
    basis: "50%",
    cutoff: "max-lg:as-bg",
    image: { src: ClareCollegeCartoon, alt: "Clare College Cartoon" },
    date: new Date(2024, 1, 1, 20, 0),
    title: "CCMS Lent Concert",
    description: (
        <p>
            Clare College Music Society returns to West Road Concert Hall with
            Prokofiev, Mozart and great English choral works.
        </p>
    ),
    programme: (
        <ol>
            <li>
                Prokofiev - Symphony No. 1 <q>Classical</q>
            </li>
            <li>W. A. Mozart - Horn Concerto No. 4</li>
            <li>
                V. Williams - <i>The Wasps: Overture</i>
            </li>
            <li>V. Williams - Five Mystical Songs</li>
            <li>
                H. Parry - <i>Blest Pair of Sirens</i>
            </li>
        </ol>
    ),
    performers: (
        <ol>
            <li>Clare College Orchestra</li>
            <li>Horn - Isaac Chan</li>
            <li>Baritone - Julian Manresa</li>
            <li>Mezzo-Soprano - Emma Caroe</li>
            <li>Soprano - Emma Paterson</li>
        </ol>
    ),
    tickets:
        "https://www.adcticketing.com/whats-on/concert/ccms-lent-term-concert",
    admission: "£10 | £6 (Concessions)",
    location: WRCH,
};
