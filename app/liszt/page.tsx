export default function Page() {
  return (
    <div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 pt-28 pb-8 font-bold tracking-wider bg-gradient-to-bl from-gray-600 to-gray-500">
        <h1 className="py-2 text-4xl text-white uppercase decoration-2 hover:underline">
          Why play Liszt?
        </h1>
        <div className="py-4 text-2xl text-gray-300">
          <p className="uppercase">The composer of contrasts:</p>
          <p className="ml-8">
            Versatility and innovation in the B minor sonata.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 py-12 lg:py-16 sm:text-lg font-mono tracking-wide text-justify">
        <p>
          By no means was Liszt a first-rate pianist and a second-rate composer.
          Although his identity was first established as a peripatetic virtuoso,
          this almost completely receded during the second half of his life.
          Persuaded by his mistress Carolyne zu Sayn-Wittgenstein, he embraced a
          career as a composer rather than that of a performer. Contrary to
          popular belief, Liszt did not write difficult pieces for the stage.
          After his retirement from the stage at 35 years old, such a claim
          would not apply anymore.
        </p>
        <p>
          The initial reception of this sonata was negative, which was to be
          expected of contemporary music. Has the première of a 21th century
          avant-garde composition ever escaped criticism? Clara Schumann
          denounced it as a <q>blind noise</q>, and Brahms allegedly fell asleep
          when Liszt performed it himself. So how did it become one of the most
          studied works of piano literature? Popular speculation associates this
          sonata with the legend of Faust, a scholar who makes a pact with the
          devil for infinite knowledge and power. However, this only satisfies
          those who feel that the work needs a programmatic explanation. It is
          enough to see that the piece is crafted so intelligently.
        </p>
        <p>
          Liszt&apos;s economy of thematic material is indispensable to the
          double-function form of this piece. Despite being a continuous piece
          of music, its distinct movements are clearly identifiable: a short
          sonata form, slow movement, scherzo-fugue, and finale. Yet we can
          still see the usual sonata-allegro form encompassing the whole piece.
          Brilliant motivic transformation is what brings out this dual
          structure.
        </p>
        <p>
          If Bach is an astronomer, and Beethoven is a challenger, then Liszt is
          a sorcerer. We are immediately presented with an astonishing start to
          a half-hour sonata. Ominous timpano (singular, because there is only
          one note!) strikes followed by descending scales. So where are we
          tonally? Music theory claims that these scales are the Phrygian and
          Hungarian modes of the scale of G &mdash; with the last note of the
          scale missing &mdash; in a B minor sonata. By some miracle, the first
          root position B minor chord appears almost two minutes in. At the very
          least, this descending scale theme is easy to recognise, and indeed,
          Liszt uses it as a sort of structural glue. It acts like a leitmotif
          within an opera. But where did the last note of the scale go? Careful
          examination reveals that Liszt avoids using the bottom B of the piano
          through the entire piece except one place, although some pianists are
          tempted to add the bottom B for extra <i>oomph</i> in the
          recapitulation.
        </p>
        <p>
          In the manuscript the piece was supposed to end with a barrage of
          noisy chords, until Liszt thought better of it. Instead: a reference
          back to the <q>second movement</q>. The final cadence is a tritone
          leap from F major to B minor, the furthest key change possible. It is
          incredible that such harmony is possible, but in fact, it has already
          appeared six times throughout, conditioning the listener and thus
          enabling this impossible cadence. The final note of the piece is the
          bottom B of the piano; the scale is finally resolved.
        </p>
      </div>
    </div>
  );
}
