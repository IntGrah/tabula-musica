import * as Liszt from "@/app/articles/24-02-06-liszt";
import * as LisztSonata from "@/app/articles/24-02-05-liszt-sonata";
import ArticleCard from "@/app/articles/article-card";

export default function ArticlesPage() {
    return (
        <section className="relative flex flex-wrap">
            <ArticleCard props={Liszt.summary} />
            <ArticleCard props={LisztSonata.summary} />
        </section>
    );
}
