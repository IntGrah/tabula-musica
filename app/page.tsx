import Button from "./ui/button";
import Github from "./ui/github";

export default function Home() {
  return (
    <div>
      <div className="flex mb-8 justify-between">
        <Github />
      </div>

      <div className="flex lg:grid-cols-4 text-center lg:text-left lg:w-full">
        <Button href="">Lorem</Button>
        <Button href="">Ipsum</Button>
        <Button href="">Dolor</Button>
        <Button href="">Amet</Button>
      </div>
    </div>
  );
}
