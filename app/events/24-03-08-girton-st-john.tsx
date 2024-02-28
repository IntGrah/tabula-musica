import { EventCardProps } from "./event";
import { GirtonHall } from "./locations";
import GirtonCollege from "/public/girton-college.jpg";

export const summary: EventCardProps = {
    basis: "50%",
    cutoff: "max-xl:as-bg",
    image: {
        src: GirtonCollege,
        alt: "Girton College, Cambridge",
    },
    date: new Date(2024, 2, 8, 20, 0),
    title: "Bach: St John Passion",
    description: (
        <p>
            2024 marks the 300th anniversary of the first performance of
            Bach&apos;s St John Passion, on Good Friday of 1724 in Leipzig.
        </p>
    ),
    programme: (
        <ol>
            <li>Pre-concert talk by Professor Bettina Varwig (6:45 pm)</li>
            <li>J. S. Bach - St John Passion</li>
        </ol>
    ),
    performers: (
        <ol>
            <li>Cambridge University Chamber Choir</li>
            <li>Cambridge University Collegium Musicum</li>
            <li>Members of the OAE Experience Ensemble</li>
            <li>Violin/Director - Margaret Faultless</li>
            <li>Tenor/Director - Nicholas Mulroy</li>
        </ol>
    ),
    tickets:
        "https://www.saffronhall.com/choose-seats?instance=175641ALDJDLTBSRPBGGQVRRLDGNNPDKN",
    admission:
        "£25 | £22.50 (Concessions) | £5 (Cambridge University Students)",
    location: GirtonHall,
};
