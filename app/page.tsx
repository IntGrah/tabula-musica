import About from "./ui/about";
import Articles from "./articles/page";
import Image from "next/image";
import Header from "./ui/header";
import TabulaMusica from "/public/tabula-musica.jpg";
import ArtOfFugue from "/public/art-of-fugue.jpg";

export default function HomePage() {
    return (
        <main>
            <Header />
            <div className="h-80 sm:h-96 md:h-[28rem]">
                <Image
                    className="size-full object-cover opacity-20"
                    src={ArtOfFugue}
                    alt="Manuscript of The Art of Fugue"
                />
            </div>
            <div className="h-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis exercitationem officia mollitia, saepe porro harum,
                vero sapiente explicabo, temporibus corporis asperiores quos qui
                aperiam deleniti nam debitis quasi voluptates tempora!
            </div>
            <div className="opacity-70 md:px-16">
                <Image src={TabulaMusica} alt="" />
            </div>
            <div id="about" className="h-72"></div>
            <About />
            <div className="h-72"></div>
            <Articles />
            <div className="h-96"></div>
        </main>
    );
}
//
