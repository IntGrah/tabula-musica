import PianoRecital from "./ui/events/pianoRecital";
import CCMSConcert from "./ui/events/ccms";
import OboeRecital from "./ui/events/oboeRecital";

export default function Home() {
  return (
    <div>
      <div className="h-1/2 pt-32 p-16 text-6xl font-mono font-bold uppercase tracking-widest text-gray-600">
        My Page
      </div>
      <p className="p-8 text-center text-6xl font-mono font-bold uppercase tracking-widest text-gray-500/50">
        Events
      </p>
      <div className="flex max-lg:flex-col bg-gray-800 text-white">
        <div className="h-96 lg:w-2/5">
          <PianoRecital />
        </div>
        <div className="flex max-sm:flex-col lg:w-3/5 h-[36rem] sm:h-96">
          <div>
            <CCMSConcert />
          </div>
          <div>
            <OboeRecital />
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  );
}
