import SectionHeader from "./ui/section-header";
import About from "./ui/about";
import Events from "./events/page";
import Articles from "./articles/page";

export default function HomePage() {
  return (
    <>
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
