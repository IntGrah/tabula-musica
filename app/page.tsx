import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";
import SectionHeader from "./ui/section-header";
import About from "./ui/about";
import Events from "./events/page";
import Articles from "./articles/page";

export default function Home() {
  return (
    <>
      <div className="relative h-96 md:h-[28rem]">
        <Image
          className="size-full -z-10 object-cover opacity-20"
          src={DieKunstDerFuge}
          alt="Manuscript of The Art of Fugue"
        />
        <h1
          id="home"
          className="absolute top-0 pt-32 pl-8 text-6xl font-mono uppercase tracking-widest text-violet-950/80"
        >
          Home
        </h1>

        <h2 className="absolute top-0 pt-48 pl-10 tracking-wide text-violet-900/80">
          Cambridge-based Music Magazine
        </h2>
        <SectionHeader id="events">Events</SectionHeader>
      </div>
      <Events />
      <div className="relative h-72">
        <SectionHeader id="articles">Articles</SectionHeader>
      </div>
      <Articles />
      <div className="h-72"></div>
      <About />
      <div className="relative h-96">
        <SectionHeader id="contact">Contact</SectionHeader>
      </div>
    </>
  );
}
