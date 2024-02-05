import Liszt from "./23-12-28-liszt";
import Chopin from "./24-01-22-chopin";

export default function Articles() {
  return (
    <div className="md:py-4 bg-gradient-to-r from-indigo-950/80 to-indigo-900/80 shadow-2xl">
      <Liszt />
      <Chopin />
    </div>
  );
}
