import Button from "./button";
import Github from "./github";
import IntGrah from "./intgrah";

export default function Home() {
  return (
    <div className="flex flex-col p-0 lg:p-24 bg-gradient-to-r from-purple-950 from-10% via-indigo-950 via-40% to-teal-950 to-95% min-h-screen items-center justify-between">
      <div className="flex w-full items-start justify-between">
        <Github />
        <IntGrah />
      </div>

      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Button name="Lorem" text="Lorem" />
        <Button name="Ipsum" text="Ipsum" />
        <Button name="Dolor" text="Dolor" />
        <Button name="Amet" text="Amet" />
      </div>
    </div>
  );
}
