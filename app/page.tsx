import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";
import Articles from "./ui/articles/articles";
import ViewMore from "./ui/viewMore";
import SectionHeader from "./ui/sectionHeader";
import About from "./ui/about";
import Events from "./ui/events";
import Footer from "./ui/footer";

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
        <q className="absolute top-48 right-8 md:right-24 text-center md:text-lg font-mono text-gray-800">
          After this, what is
          <br />
          left for us to write?
        </q>
        <SectionHeader id="events">Events</SectionHeader>
      </div>
      <Events />
      <div className="relative h-96">
        <ViewMore />
        <SectionHeader id="articles">Articles</SectionHeader>
      </div>
      <Articles />
      <div className="relative h-96"></div>
      <About />
      <div className="relative h-96">
        <SectionHeader id="contact">Contact</SectionHeader>
      </div>
      <Footer />
    </div>
  );
}
