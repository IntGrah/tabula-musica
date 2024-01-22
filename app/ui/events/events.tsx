// import { useState } from "react";
import RachmaninoffVigil from "./rachmaninoffVigil";
import CCMSConcert from "./ccms";
import ClareRecital from "./clareRecital";
import OboeRecital from "./oboeRecital";
import PianoRecital from "./pianoRecital";
import MozartOperaScenes from "./mozartOperaScenes";

export default function Events() {
  // const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-wrap overflow-hidden bg-gray-800 text-white shadow-2xl">
      <RachmaninoffVigil />
      <ClareRecital />
      <PianoRecital />
      <CCMSConcert />
      <OboeRecital />
      <MozartOperaScenes />
    </div>
  );
}
