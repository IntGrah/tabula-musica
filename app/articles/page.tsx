import ArticleCard from "@/components/article-card";
import * as Liszt from "@/articles/24-02-06-liszt";
import * as LisztSonata from "@/articles/24-02-05-liszt-sonata";

export default function ArticlesPage() {
    return (
        <main>
            <section className="relative flex flex-wrap">
                <ArticleCard props={Liszt.summary} />
                <ArticleCard props={LisztSonata.summary} />
            </section>
        </main>
    );
}
