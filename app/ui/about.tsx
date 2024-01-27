export default function About() {
  return (
    <div id="about" className="py-8 md:py-16 bg-black text-white">
      <h1 className="py-4 text-center text-2xl md:text-3xl font-mono bold uppercase tracking-wider">
        About
      </h1>
      <div className="px-4 sm:px-8 md:px-16 lg:px-48 xl:px-96 text-center text-base sm:text-lg md:text-xl font-mono">
        <p className="py-4">
          I (the author of the page) am a Computer Science undergraduate at the
          University of Cambridge, which is an awkward position to be in, as I
          had studied music full time up until then. My interests primarily lie
          in the intersection of computer algorithms and music, and a majority
          would say that these are mutually exclusive subjects. But actually
          there are plenty of things you can discover in this weird conjunction
          of specialisms. In the future I may publicise a few projects on this
          page, which include, but are not limited to: artificial intelligence
          aided musical composition, harmonic and structural analysis, and
          feature guided interpolation.
        </p>
        <h1 className="py-4 text-center text-2xl md:text-3xl font-mono bold uppercase tracking-wider">
          Good to know
        </h1>
        <p className="py-4">
          <q className="italic">
            Any recommendations of Jazz music must be well grounded, or will
            simply not be entertained. Nor will anything related to popular
            music, specifically, simplistic rubbish which is the product of the
            capitalisation and industrialisation of music. Faith only has done
            justice to its place in art and even then, we should have grown out
            of it. The fundamental motivation for experimentation should never
            be a desire to produce works that are unconventional. Philosophical
            nihilism isn&apos;t exactly fun, but does it really matter if it
            isn&apos;t?
          </q>
        </p>
      </div>
    </div>
  );
}
