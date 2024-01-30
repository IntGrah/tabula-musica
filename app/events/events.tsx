import CCMSConcert from "./ccms";
import OboeRecital from "./oboeRecital";
import OperaScenes from "./operaScenes";
import TrinityOrchestra from "./trinityOrchestra";

export default function Events() {
  return (
    <div className="flex flex-wrap bg-gray-800 text-white shadow-2xl transition-all">
      <CCMSConcert />
      <OboeRecital />
      <OperaScenes />
      <TrinityOrchestra />
    </div>
  );
}
