import About from "./ui/about";
import Articles from "./articles/page";
import TabulaMusica from "/public/tabula-musica.jpg";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
            <div className="opacity-80 px-16">
                <h1 className="uppercase font-serif text-5xl text-center text-violet-900 p-16">Latest Issue</h1>
                <Image src={TabulaMusica} alt="" />
            </div>
            <div className="h-72">
                <div id="about"></div>
            </div>
            <About />
            <div className="h-72"></div>
            <Articles />
            <div className="h-96"></div>
        </>
    );
}
//