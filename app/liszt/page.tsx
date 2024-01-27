import Footer from "../ui/footer";
import Image from "next/image";
import LisztSonata from "/public/liszt-sonata.jpg";

export default function LisztPage() {
  return (
    <>
      <div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 py-8 font-bold tracking-wider bg-gradient-to-r from-slate-400 to-slate-500 shadow-2xl">
          <h1 className="py-2 text-4xl text-white uppercase decoration-2 hover:underline">
            The Liszt Sonata:
          </h1>
          <div className="py-4 text-2xl text-gray-300">
            <p>Overview, and particular themes</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 py-12 lg:py-16 sm:text-lg md:text-xl tracking-wide text-justify">
          <p>
            By no means was Liszt a first-rate pianist and a second-rate
            composer. It is true that his identity was first established as a
            peripatetic virtuoso, but this largely receded during the second
            half of his life. Persuaded by his mistress Carolyne zu
            Sayn-Wittgenstein, he embraced a career as a composer rather than
            that of a performer, never performing by necessity but by free will,
            if that exists. The B minor sonata was written in a time interval
            which saw this change in his career, and it turned out to be the
            only self-sufficient sonata he would write. difficult pieces for the
            stage.
          </p>
          <p>
            The initial reception of this sonata was negative, which was to be
            expected of contemporary music. Has the première of a 21th century
            avant-garde work ever escaped violent criticism? Clara Schumann
            denounced it as a <q>blind noise</q>, and Brahms allegedly fell
            asleep when Liszt performed it himself. It has become one of the
            most studied works of piano literature, a claim supplemented by this
            short article. Popular speculation associates this sonata with the
            legend of Faust, a scholar who makes a pact with the devil for
            infinite knowledge and power. However, this probably satisfies only
            those who feel that the work needs a programmatic explanation. I do
            not &mdash; it is enough to see that the way a piece is crafted is a
            sufficient basis for art.
          </p>
          <p>
            Liszt&apos;s economy of thematic material is indispensable to the
            double-function form of this piece. Despite being a continuous piece
            of music, its distinct movements are clearly identifiable: a short
            sonata form, slow movement, scherzo-fugue, and finale. Yet we can
            still see the usual sonata-allegro form encompassing the whole
            piece. Brilliant motivic transformation is what brings out this dual
            structure.
          </p>
          <p>
            If Bach is an astronomer, and Beethoven is a challenger, then I
            claim Liszt is a sorcerer. We are immediately presented with an
            astonishing start to a half-hour sonata, if it is obvious that it is
            a sonata at all. Ominous timpano (singular, because there is only
            one note!) strikes followed by descending scales. In what tonal
            world can we describe ourselves in? The astute and knowledgeable
            observer should recognise that these scales are the Phrygian and
            Hungarian modes of the scale of G. However, the last notes of the
            scales missing. It should be reminded that this piece is in B minor
            &mdash; at the very least, this descending scale theme is easy to
            recognise (indeed, Liszt uses it as a sort of structural glue,
            acting like a leitmotif within an opera). By some miracle, the first
            root position B minor chord appears almost two minutes in, and the
            listener is certainly going to be reminded of it in the
            recapitulation. Some pianists are tempted to add a bottom B to
            emphasise this recapitulation when it comes, as it is the only
            section repeated verbatim, although Leslie Howard might slap you on
            the wrist for it. Careful examination reveals that Liszt avoids
            using the bottom B of the piano through the entire piece except at
            one place. It would be all the wiser to adhere to this restraint.
          </p>
          <p>
            <div className="ml-8 mb-4 p-4 w-full sm:w-80 float-right bg-slate-300/50">
              <Image
                className="w-full max-w-96"
                src={LisztSonata}
                alt="Manuscript of Liszt Sonata"
              />
            </div>
            In the manuscript, the piece was supposed to end with a barrage of
            noisy chords, until Liszt thought better of it. Instead, an
            intelligently positioned reminiscence back to the second{" "}
            <q>movement</q>. The final cadence is a tritone leap from F major to
            B minor, the furthest key change possible, up to enharmonic
            equivalence. It is incredible that such harmony is possible, but in
            fact, it has already appeared six times throughout, conditioning the
            listener and thus enabling this impossible cadence. On the final
            note of the piece we get the only occurrence of the bottom B on the
            piano: a conclusive resolution of this scalic theme, which finally
            completes the 8 note scale.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
