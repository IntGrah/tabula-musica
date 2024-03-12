import * as Liszt from "./24-02-06-liszt";
import * as LisztSonata from "./24-02-05-liszt-sonata";
import ArticleCard from "./article-card";

export default function Articles() {
    return (
        <section className="relative flex flex-wrap">
            <ArticleCard props={Liszt.summary} />
            <ArticleCard props={LisztSonata.summary} />
        </section>
    );
}
