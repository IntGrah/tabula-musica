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
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente quod
      tenetur facere natus architecto. Amet voluptates, vitae eveniet
      exercitationem quae officia odio asperiores, quos id reprehenderit eos
      dignissimos sequi?
    </Article>
  );
}
