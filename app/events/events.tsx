import RachmaninoffVigil from "./rachmaninoffVigil";
import CCMSConcert from "./ccms";
import ClareRecital from "./clareRecital";
import OboeRecital from "./oboeRecital";
import PianoRecital from "./pianoRecital";
import MozartOperaScenes from "./mozartOperaScenes";

export default function Events() {
  return (
    <div
      className={`flex flex-wrap bg-gray-800 text-white shadow-2xl transition-all`}
    >
      <RachmaninoffVigil />
      <ClareRecital />
      <PianoRecital />
      <CCMSConcert />
      <OboeRecital />
      <MozartOperaScenes />
    </div>
  );
}
