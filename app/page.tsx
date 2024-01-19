import PianoRecital from "./ui/events/pianoRecital";
import CCMSConcert from "./ui/events/ccms";
import OboeRecital from "./ui/events/oboeRecital";
import ClareRecital from "./ui/events/clareRecital";
import Image from "next/image";
import DieKunstDerFuge from "/public/die-kunst-der-fuge.jpg";
import LisztPortrait from "/public/liszt-portrait.jpg";
import ChopinPortrait from "/public/chopin-portrait.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative h-1/2">
        <div className="overflow-hidden -z-10">
          <Image
            className="size-full object-cover opacity-20"
            src={DieKunstDerFuge}
            alt="Manuscript of The Art of Fugue"
          />
        </div>
        <div>
          <h1
            id="home"
            className="absolute top-32 p-8 text-6xl font-mono uppercase tracking-widest text-gray-600"
          >
            Home
          </h1>
          <h1
            id="events"
            className="absolute bottom-0 w-full p-8 text-center text-6xl font-mono uppercase tracking-widest text-gray-500/50"
          >
            Events
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap bg-gray-800 text-white shadow-2xl">
        <div className="w-full md:w-3/5">
          <ClareRecital />
        </div>
        <div className="w-full md:w-2/5">
          <PianoRecital />
        </div>
        <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-3/5 2xl:w-1/2">
          <CCMSConcert />
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/2 xl:w-2/5 2xl:w-1/2">
          <OboeRecital />
        </div>
      </div>
      <div className="relative h-96">
        <Link
          className="absolute right-0 px-8 py-2 text-2xl font-mono bold uppercase tracking-wider text-gray-400 transition-colors bg-gray-700 hover:bg-gray-800/90 rounded-b-2xl border-b-4 border-b-gray-400"
          href="/"
        >
          Archive
        </Link>
        <h1
          id="articles"
          className="absolute bottom-0 w-full p-8 text-center text-6xl font-mono uppercase tracking-widest text-gray-500/50"
        >
          Articles
        </h1>
      </div>
      <div className="md:py-4 bg-gradient-to-b from-gray-500/70 to-gray-600/60 text-white">
        <Link className="flex w-full h-96 md:my-8 xl:my-12 group" href="/">
          <div className="md:ml-8 lg:ml-16 max-w-96 overflow-hidden shadow-2xl">
            <Image
              className="h-full object-cover md:rounded-l-xl transition-transform duration-500 group-hover:scale-105"
              src={LisztPortrait}
              alt="Portrait of Franz Liszt"
            />
          </div>
          <div className="flex-1 min-w-64 p-4 xl:p-8 bg-gradient-to-r from-gray-600/30 to-gray-500/30">
            <h1 className="py-2 text-4xl font-bold uppercase tracking-wider decoration-2 hover:underline">
              Liszt
            </h1>
            <div className="w-full tracking-wide">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur rem neque, ratione perspiciatis omnis labore rerum ipsam
                illo quisquam eaque quod fugit consequatur quibusdam voluptates
                magni ea, accusamus fugiat dignissimos.
              </p>
            </div>
          </div>
        </Link>
        <Link className="flex w-full h-96 md:my-8 xl:my-12 group" href="/">
          <div className="flex-1 min-w-64 p-4 xl:p-8 bg-gradient-to-r from-gray-600/30 to-gray-500/30">
            <h1 className="py-2 text-4xl font-bold uppercase tracking-wider decoration-2 hover:underline">
              Chopin
            </h1>
            <div className="w-full tracking-wide">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem quis perferendis repellendus non, inventore ipsum
                similique, corporis ducimus deleniti quas provident illo, in
                nisi natus. Atque dolorem id mollitia assumenda.
              </p>
            </div>
          </div>
          <div className="md:mr-8 lg:mr-16 max-w-96 overflow-hidden shadow-2xl">
            <Image
              className="h-full object-cover md:rounded-r-xl transition-transform duration-500 group-hover:scale-105"
              src={ChopinPortrait}
              alt="Portrait of Frédéric Chopin"
            />
          </div>
        </Link>
      </div>
      <div className="relative h-96">
        <h1
          id="music"
          className="absolute bottom-0 w-full p-8 text-center text-6xl font-mono uppercase tracking-widest text-gray-500/50"
        >
          Music
        </h1>
      </div>
      <div className="py-8 md:py-16 bg-black text-white">
        <h1 className="py-4 text-center text-6xl md:text-8xl bold uppercase tracking-wider decoration-2 hover:underline">
          Music
        </h1>
        <div className="px-4 sm:px-8 md:px-16 lg:px-48 xl:px-96 text-center text-xl font-mono">
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            laudantium quod tempora quos fugit modi id, nostrum culpa obcaecati
            incidunt eos? Labore veniam dolore expedita nostrum consequuntur
            mollitia voluptates eveniet. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis facere pariatur hic ullam distinctio
            molestiae numquam veniam, nulla placeat fuga adipisci soluta
            assumenda tempora voluptatem amet iusto ea consequuntur asperiores!
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            veniam beatae nisi cum nulla natus quisquam, quo at? Laboriosam
            dignissimos, facilis perspiciatis rerum non consequuntur eligendi
            voluptate nemo omnis harum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam aspernatur, enim, sit odio animi dolore
            culpa earum dolores corporis nostrum beatae, asperiores natus
            ducimus. Delectus facilis autem sit earum nam.
          </p>
        </div>
      </div>
      <div className="relative h-96">
        <h1
          id="end"
          className="absolute bottom-0 w-full p-8 text-center text-6xl font-mono uppercase tracking-widest text-gray-500/50"
        >
          End
        </h1>
      </div>
    </div>
  );
}
