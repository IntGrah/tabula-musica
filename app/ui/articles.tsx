import Image from "next/image";
import Link from "next/link";
import LisztPortrait from "/public/liszt-portrait.jpg";
import ChopinPortrait from "/public/chopin-portrait.jpg";

export default function Articles() {
  return (
    <div className="md:py-4 bg-gradient-to-b from-gray-500/70 to-gray-600/60 text-white">
      <Link className="flex w-full h-96 md:my-8 xl:my-12 group" href="/">
        <div className="md:ml-8 lg:ml-16 max-w-96 overflow-hidden shadow-2xl">
          <Image
            className="h-full object-cover md:rounded-l-xl transition-transform duration-500 ease-out group-hover:scale-105"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ad
              laboriosam tenetur nihil exercitationem, tempora id ea quisquam
              ratione dicta! Porro soluta molestias ipsam iste sequi ut.
              Placeat, obcaecati mollitia.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              eum provident, dicta vel consequuntur eius et quod sed iusto,
              animi voluptatum impedit ut ipsa facilis suscipit quidem quae quam
              temporibus.
            </p>
          </div>
        </div>
        <div className="md:mr-8 lg:mr-16 max-w-96 overflow-hidden shadow-2xl">
          <Image
            className="h-full object-cover md:rounded-r-xl transition-transform duration-500 ease-out group-hover:scale-105"
            src={ChopinPortrait}
            alt="Portrait of Frédéric Chopin"
          />
        </div>
      </Link>
    </div>
  );
}
