export default function Footer() {
  return (
    <div className="py-8 md:py-16 bg-black">
      <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-16 lg:px-48 xl:px-96 text-center text-lg md:text-xl text-white font-mono">
        <p>
          Edits tend to be personal, but if compelled, send to{" "}
          <a className="underline" href="mailto:i@intgrah.com">
            i@intgrah.com
          </a>
        </p>
        <p>
          In spite of declarative libraries, bugs exist.
          <br />
          Do not contact me about these.
        </p>
        <hr />
        <p>© 2024 Jeremy Chen.</p>
      </div>
    </div>
  );
}
