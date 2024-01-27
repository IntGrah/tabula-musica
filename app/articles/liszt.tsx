import Article from "./article";
import LisztSonataOpening from "/public/liszt-sonata-opening.jpg";

export default function Liszt() {
  return (
    <Article
      href="/liszt"
      src={LisztSonataOpening}
      alt="Manuscript of opening of Liszt Sonata"
      title={<p>The Liszt Sonata:</p>}
      subtitle={<p>Overview, and particular themes</p>}
      date={new Date(2023, 11, 28)}
    >
      A short account on both ends of the Sonata in B minor.
    </Article>
  );
}
