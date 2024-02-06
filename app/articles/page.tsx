import SectionTitle from "../ui/section-title";
import Liszt from "./24-02-06-liszt";
import LisztSonata from "./24-02-05-liszt-sonata";

export default function Articles() {
  return (
    <div className="relative md:py-4 bg-gradient-to-r from-indigo-950/80 to-indigo-900/80 shadow-2xl">
      <SectionTitle text="articles" />
      <Liszt />
      <LisztSonata />
    </div>
  );
}
