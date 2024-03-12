import About from "./ui/about";
import Articles from "./articles/page";
import Image from "next/image";
import Header from "./ui/header";
import ArtOfFugue from "/public/art-of-fugue.jpg";
import TabulaMusica from "/public/tabula-musica.jpg";

export default function HomePage() {
    return (
        <main>
            <Header />
            <figure className="h-80 sm:h-96 md:h-[28rem]">
                <Image
                    className="size-full object-cover opacity-20"
                    src={ArtOfFugue}
                    alt="Manuscript of The Art of Fugue"
                />
            </figure>
            <hgroup className="md:px-16 py-8">
                <h2 className="text-center text-5xl text-violet-900">
                    Latest Issue
                </h2>
                <Image
                    className="m-auto w-full max-w-4xl"
                    src={TabulaMusica}
                    alt=""
                />
            </hgroup>
            <section id="about" className="h-72"></section>
            <About />
            <div className="h-72"></div>
            <Articles />
            <div className="h-96"></div>
        </main>
    );
}
//
