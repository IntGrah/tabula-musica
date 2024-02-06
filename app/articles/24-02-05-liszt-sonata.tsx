import Article from "./article";
import LisztSonataEnding from "/public/liszt-sonata-ending.jpg";

export default function LisztSonata() {
  return (
    <Article
      href="/#articles"
      src={LisztSonataEnding}
      alt="Ending of manuscript of Liszt Sonata"
      title="Ipsum dolor?"
      subtitle="Sit amet consectetur. adipiscing elit."
      date={new Date(2024, 0, 22)}
    >
      Vel sapiente quod tenetur facere natus architecto. Amet voluptates, vitae
      eveniet exercitationem quae officia odio asperiores?
    </Article>
  );
}
