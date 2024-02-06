import SectionTitle from "../ui/section-title";
import WRCHCUO from "./24-02-10-wrch-cuo";
import GirtonLowe from "./24-02-25-girton-lowe";
import TrinityOboe from "./24-02-24-trinity-oboe";
import ClareOpera from "./24-03-09-clare-opera";
import TrinityTCO from "./24-03-09-trinity-tco";
import GirtonStJohn from "./24-03-08-girton-st-john";

export default function Events() {
  return (
    <div className="relative flex flex-wrap bg-gray-800/95 shadow-2xl">
      <SectionTitle text="events" />
      <WRCHCUO />
      <TrinityOboe />
      <GirtonLowe />
      <GirtonStJohn />
      <ClareOpera />
      <TrinityTCO />
    </div>
  );
}
