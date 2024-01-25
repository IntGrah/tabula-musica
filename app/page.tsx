import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";
import Articles from "./articles/articles";
import SectionHeader from "./ui/sectionHeader";
import About from "./ui/about";
import Events from "./events/events";
import Footer from "./ui/footer";
import Quote from "./ui/quote";

export default function HomePage() {
  return (
    <>
      <div className="relative h-80 md:h-96 lg:h-[32rem]">
        <Image
          className="size-full -z-10 object-cover opacity-20"
          src={DieKunstDerFuge}
          alt="Manuscript of The Art of Fugue"
        />
        <h1
          id="home"
          className="absolute top-0 p-8 text-6xl font-mono uppercase tracking-widest text-gray-600"
        >
          Home
        </h1>
        <Quote />
        <SectionHeader id="events">Events</SectionHeader>
      </div>
      <Events />
      <div className="relative h-96">
        <SectionHeader id="articles">Articles</SectionHeader>
      </div>
      <Articles />
      <div className="h-96"></div>
      <About />
      <div className="relative h-96">
        <SectionHeader id="contact">Contact</SectionHeader>
      </div>
      <Footer />
    </>
  );
}
