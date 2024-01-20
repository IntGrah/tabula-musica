import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";
import Articles from "./ui/articles";
import ViewMore from "./ui/viewMore";
import SectionHeader from "./ui/sectionHeader";
import Music from "./ui/music";
import Events from "./ui/events";

export default function Home() {
  return (
    <div>
      <div className="relative h-96 md:h-[36rem] overflow-hidden">
        <Image
          className="size-full -z-10 object-cover opacity-20"
          src={DieKunstDerFuge}
          alt="Manuscript of The Art of Fugue"
        />
        <h1
          id="home"
          className="absolute top-24 p-8 text-6xl font-mono uppercase tracking-widest text-gray-600"
        >
          Home
        </h1>
        <SectionHeader id="events">Events</SectionHeader>
      </div>
      <Events />
      <div className="relative h-96">
        <ViewMore />
        <SectionHeader id="articles">Articles</SectionHeader>
      </div>
      <Articles />
      <div className="relative h-96">
        <SectionHeader id="music">Music</SectionHeader>
      </div>
      <Music />
      <div className="relative h-96">
        <SectionHeader id="end">End</SectionHeader>
      </div>
      <div className="h-96 bg-black"></div>
    </div>
  );
}
