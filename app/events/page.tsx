import SectionTitle from "../ui/section-title";
import EventCard from "./event";
import { summary as WrchCuo } from "./24-02-10-wrch-cuo";
import { summary as GirtonLowe } from "./24-02-25-girton-lowe";
import { summary as TrinityOboe } from "./24-02-24-trinity-oboe";
import { summary as ClareOpera } from "./24-03-09-clare-opera";
import { summary as TrinityTCO } from "./24-03-09-trinity-tco";
import { summary as GirtonStJohn } from "./24-03-08-girton-st-john";

export default function Events() {
  return (
    <div className="relative flex flex-wrap bg-gray-800/95 shadow-2xl">
      <SectionTitle text="events" />
      <EventCard props={WrchCuo} />
      <EventCard props={TrinityOboe} />
      <EventCard props={GirtonLowe} />
      <EventCard props={GirtonStJohn} />
      <EventCard props={ClareOpera} />
      <EventCard props={TrinityTCO} />
    </div>
  );
}
