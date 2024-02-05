export default function Footer() {
  return (
    <div className="flex flex-col gap-8 py-8 md:py-16 bg-black px-4 sm:px-8 md:px-16 lg:px-48 xl:px-96 text-center text-lg md:text-xl text-white font-mono">
      <p>
        If you would like to submit an event or article, please email{" "}
        <a className="underline" href="mailto:tabulamusica@cambridgesu.co.uk">
          tabulamusica@cambridgesu.co.uk
        </a>
      </p>
      <hr />
      <p>© 2024 Jeremy Chen.</p>
    </div>
  );
}
