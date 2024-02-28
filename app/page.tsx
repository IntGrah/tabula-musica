import About from "./ui/about";
import Events from "./events/page";
import Articles from "./articles/page";

export default function HomePage() {
    return (
        <>
            {/* <div className="h-72"></div> */}
            <Articles />
            <div className="h-72">
                <div id="about"></div>
            </div>
            <About />
            <div className="h-96"></div>
        </>
    );
}
//