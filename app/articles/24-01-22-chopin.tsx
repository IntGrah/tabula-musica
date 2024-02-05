import Article from "./article";
import ChopinPortrait from "/public/chopin-portrait.jpg";

export default function Chopin() {
  return (
    <Article
      href="/#articles"
      src={ChopinPortrait}
      alt="Portrait of Frédéric Chopin"
      title={<p>Ipsum dolor?</p>}
      subtitle={<p>Sit amet consectetur. adipiscing elit.</p>}
      date={new Date(2024, 0, 22)}
    >
      Vel sapiente quod tenetur facere natus architecto. Amet voluptates, vitae
      eveniet exercitationem quae officia odio asperiores?
    </Article>
  );
}
