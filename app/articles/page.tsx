import SectionTitle from "../ui/section-title";
import * as Liszt from "./24-02-06-liszt";
import * as LisztSonata from "./24-02-05-liszt-sonata";
import ArticleSummary from "./article-summary";

export default function Articles() {
  return (
    <div className="relative flex flex-wrap">
      <SectionTitle text="articles" />
      <ArticleSummary props={Liszt.summary} />
      <ArticleSummary props={LisztSonata.summary}/>
    </div>
  );
}
