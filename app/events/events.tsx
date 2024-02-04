import CUOConcert from "./cuo";
import LoweEnsemble from "./loweEnsemble";
import OboeRecital from "./oboeRecital";
import OperaScenes from "./operaScenes";
import TrinityOrchestra from "./trinityOrchestra";

export default function Events() {
  return (
    <div className="flex flex-wrap bg-gray-800 text-white shadow-2xl transition-all">
      <CUOConcert />
      <OboeRecital />
      <LoweEnsemble />
      <OperaScenes />
      <TrinityOrchestra />
    </div>
  );
}
