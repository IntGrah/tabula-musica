import Article from "./article";
import LisztPortrait from "/public/liszt-portrait.jpg";

export default function Liszt() {
  return (
    <Article
      href="/liszt"
      src={LisztPortrait}
      alt="Portrait of Franz Liszt"
      title="Why play Liszt?"
      subtitle={
        <>
          <p className="uppercase">The composer of contrasts:</p>
          <p className="md:ml-8">
            Versatility and innovation
            in the B&nbsp;minor&nbsp;sonata.
          </p>
        </>
      }
      date={new Date(2023, 11, 28)}
    >
      {}
    </Article>
  );
}
