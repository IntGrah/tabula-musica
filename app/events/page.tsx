import SectionTitle from "../ui/section-title";
import EventCard from "./event";
import * as WrchCuo from "./24-02-10-wrch-cuo";
import * as GirtonLowe from "./24-02-25-girton-lowe";
import * as TrinityOboe from "./24-02-24-trinity-oboe";
import * as ClareOpera from "./24-03-09-clare-opera";
import * as TrinityTCO from "./24-03-09-trinity-tco";
import * as GirtonStJohn from "./24-03-08-girton-st-john";

export default function Events() {
  return (
    <div className="relative flex flex-wrap bg-gray-800/95 shadow-2xl">
      <SectionTitle text="events" />
      <EventCard props={WrchCuo.summary} />
      <EventCard props={TrinityOboe.summary} />
      <EventCard props={GirtonLowe.summary} />
      <EventCard props={GirtonStJohn.summary} />
      <EventCard props={ClareOpera.summary} />
      <EventCard props={TrinityTCO.summary} />
    </div>
  );
}
