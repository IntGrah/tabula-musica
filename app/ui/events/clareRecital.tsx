import ClareChapel from "/public/clare-chapel.jpg";
import Event from "./event";

export default function ClareRecital() {
  return (
    <Event
      cutoff=""
      imageProps={{ src: ClareChapel, alt: "Clare College Chapel" }}
      date={new Date(2024, 0, 22, 13, 15)}
      href="/events"
      title="Clare Lunchtime Recital"
      programme={[
        { composer: "V. Williams", pieces: <i>Songs of Travel</i> },
        { composer: "Beethoven", pieces: <i>An die ferne Geliebte</i> },
      ]}
      location="Clare College Chapel, Cambridge"
    >
      The first lunchtime recital of Lent term at Clare Chapel.
    </Event>
  );
}
