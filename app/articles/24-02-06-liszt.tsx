import { ArticleCardProps } from "./article-card";
import LisztSonataStart from "/public/liszt-sonata-start.jpg";

export const summary: ArticleCardProps = {
    href: "/#articles",
    image: {
        src: LisztSonataStart,
        alt: "Manuscript of opening of Liszt Sonata",
    },
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet consectetur adipisicing elit.",
    description:
        "Reprehenderit corporis eos, placeat consequuntur totam aspernatur accusamus saepe, quidem perspiciatis vitae fuga commodi.",

    date: new Date(2023, 11, 28),
};
