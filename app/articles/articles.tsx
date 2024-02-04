import Chopin from "./chopin";
import Liszt from "./liszt";

export default function Articles() {
  return (
    <div className="md:py-4 bg-gradient-to-r from-slate-600 to-slate-700 shadow-2xl">
      <Liszt />
      <Chopin />
    </div>
  );
}
