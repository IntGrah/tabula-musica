import CCMSConcert from "./events/ccms";
import ClareRecital from "./events/clareRecital";
import OboeRecital from "./events/oboeRecital";
import PianoRecital from "./events/pianoRecital";

export default function Events() {
  return (
    <div className="flex flex-wrap h-[48rem] overflow-hidden bg-gray-800 text-white shadow-2xl">
      <ClareRecital />
      <PianoRecital />
      <CCMSConcert />
      <OboeRecital />
    </div>
  );
}
