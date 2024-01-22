import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";
import Articles from "./ui/articles/articles";
import ViewMore from "./ui/viewMore";
import SectionHeader from "./ui/sectionHeader";
import About from "./ui/about";
import Events from "./ui/events/events";
import Footer from "./ui/footer";
import Quote from "./ui/quote";

export default function Page() {
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
        <Quote />
        <SectionHeader id="events">Events</SectionHeader>
      </div>
      <Events />
      <div className="relative h-96">
        <ViewMore />
        <SectionHeader id="articles">Articles</SectionHeader>
      </div>
      <Articles />
      <div className="h-96"></div>
      <About />
      <div className="relative h-96">
        <SectionHeader id="contact">Contact</SectionHeader>
      </div>
      <Footer />
    </div>
  );
}
