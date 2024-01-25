export default function Footer() {
  return (
    <div className="py-8 md:py-16 bg-black">
      <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-16 lg:px-48 xl:px-96 text-center text-lg md:text-xl text-white font-mono">
        <p>
          If you would like any changes to be made to this page, please email{" "}
          <a className="underline" href="mailto:jc2483@cam.ac.uk?subject=Event">
            jc2483@cam.ac.uk
          </a>
        </p>
        <p>Please report any bugs or errors.</p>
        <hr />
        <p>© 2024 Jeremy Chen.</p>
      </div>
    </div>
  );
}
