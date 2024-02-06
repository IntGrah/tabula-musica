import { ArticleCardProps } from "./article-card";
import LisztSonataEnding from "/public/liszt-sonata-end.jpg";

export const summary: ArticleCardProps = {
  href: "/#articles",
  image: {
    src: LisztSonataEnding,
    alt: "Ending of manuscript of Liszt Sonata",
  },
  title: "Ipsum dolor?",
  subtitle: "Sit amet consectetur. adipiscing elit.",
  description:
    "Vel sapiente quod tenetur facere natus architecto. Amet voluptates, vitae eveniet exercitationem quae officia odio asperiores?",
  date: new Date(2024, 0, 22),
};
