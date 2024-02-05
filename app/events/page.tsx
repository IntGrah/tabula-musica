import WRCHCUO from "./24-02-10-wrch-cuo";
import GirtonLowe from "./24-02-25-girton-lowe";
import TrinityOboe from "./24-02-24-trinity-oboe";
import ClareOpera from "./24-03-09-clare-opera";
import TrinityTCO from "./24-03-09-trinity-tco";

export default function Events() {
  return (
    <div className="flex flex-wrap bg-gray-800/95 text-white shadow-2xl transition-all">
      <WRCHCUO />
      <TrinityOboe />
      <GirtonLowe />
      <ClareOpera />
      <TrinityTCO />
    </div>
  );
}
