import Article from "./article";
import LisztSonataOpening from "/public/liszt-sonata-opening.jpg";

export default function Liszt() {
  return (
    <Article
      href="/#articles"
      src={LisztSonataOpening}
      alt="Manuscript of opening of Liszt Sonata"
      title={<p>Lorem ipsum </p>}
      subtitle={<p>Dolor sit amet consectetur adipisicing elit.</p>}
      date={new Date(2023, 11, 28)}
    >
      Reprehenderit corporis eos, placeat consequuntur totam aspernatur
      accusamus saepe, quidem perspiciatis vitae fuga commodi. Voluptate,
      officiis deleniti aliquam debitis aperiam corrupti cumque!
    </Article>
  );
}
