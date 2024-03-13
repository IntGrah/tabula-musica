import EventCard from "@/app/events/event";
import * as LoremIpsum from "@/app/events/70-01-01-lorem-ipsum";
import * as ClareOpera from "@/app/events/24-03-09-clare-opera";
import * as TrinityTCO from "@/app/events/24-03-09-trinity-tco";
import * as GirtonStJohn from "@/app/events/24-03-08-girton-st-john";

export default function EventsPage() {
    return (
        <div className="relative flex flex-wrap bg-gray-800/95 shadow-2xl">
            <EventCard props={LoremIpsum.summary} />
            <EventCard props={GirtonStJohn.summary} />
            <EventCard props={TrinityTCO.summary} />
            <EventCard props={LoremIpsum.summary} />
            <EventCard props={ClareOpera.summary} />
            <EventCard props={LoremIpsum.summary} />
        </div>
    );
}
