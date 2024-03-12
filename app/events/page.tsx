import SectionTitle from "../ui/section-title";
import EventCard from "./event";
import * as LoremIpsum from "./70-01-01-lorem-ipsum";
import * as ClareOpera from "./24-03-09-clare-opera";
import * as TrinityTCO from "./24-03-09-trinity-tco";
import * as GirtonStJohn from "./24-03-08-girton-st-john";

export default function Events() {
    return (
        <div className="relative flex flex-wrap bg-gray-800/95 shadow-2xl">
            <SectionTitle text="events" />
            <EventCard props={LoremIpsum.summary} />
            <EventCard props={GirtonStJohn.summary} />
            <EventCard props={TrinityTCO.summary} />
            <EventCard props={LoremIpsum.summary} />
            <EventCard props={ClareOpera.summary} />
            <EventCard props={LoremIpsum.summary} />
        </div>
    );
}
