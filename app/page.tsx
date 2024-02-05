import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";
import Home from "./ui/home";
import SectionHeader from "./ui/section-header";
import About from "./ui/about";
import Events from "./events/page";
import Articles from "./articles/page";

export default function HomePage() {
  return (
    <>
      <div className="relative h-96 md:h-[28rem]">
        <Image
          className="size-full -z-10 object-cover opacity-20"
          src={DieKunstDerFuge}
          alt="Manuscript of The Art of Fugue"
        />
        <Home />
        <SectionHeader id="events">Events</SectionHeader>
      </div>
      <Events />
      <div className="relative h-72">
        <SectionHeader id="articles">Articles</SectionHeader>
      </div>
      <Articles />
      <div className="relative h-72">
        <div id="about" className="absolute size-full bottom-0"></div>
      </div>
      <About />
      <div className="relative h-96">
        <SectionHeader id="contact">Contact</SectionHeader>
      </div>
    </>
  );
}
