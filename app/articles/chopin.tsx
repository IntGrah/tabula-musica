import Article from "./article";
import ChopinPortrait from "/public/chopin-portrait.jpg";

export default function Chopin() {
  return (
    <Article
      href="/liszt"
      src={ChopinPortrait}
      alt="Portrait of Frédéric Chopin"
      title="Chopin"
      subtitle={
        <>
          <p className="uppercase">Lorem Ipsum</p>
          <p className="ml-8">Dolor sit amet consectetur.</p>
        </>
      }
      date={new Date(2024, 0, 22)}
    />
  );
}
