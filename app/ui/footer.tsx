import Link from "next/link";
import Image from "next/image";
import InstagramLogo from "/public/social/instagram.png";

export default function Footer() {
  return (
    <footer id="contact" className="px-8 bg-gray-900">
      <div className="m-auto w-full max-w-5xl">
        <Contact />
        <hr className="border-neutral-600" />
        <Legal />
      </div>
    </footer>
  );
}

function Contact() {
  return (
    <div className="flex max-sm:flex-col py-6">
      <div className="grow min-w-80">
        <h1 className="text-lg font-serif uppercase tracking-widest text-cyan-100/80">
          Contact
        </h1>
        <div className="py-4 font-mono text-neutral-200">
          <p>
            <Link
              className="hover:underline"
              href="mailto:tabulamusica@cambridgesu.co.uk"
            >
              tabulamusica@cambridgesu.co.uk
            </Link>
          </p>
          <p>
            <Link
              className="group"
              href="https://www.instagram.com/tabula_musica"
            >
              <Image
                className="inline"
                src={InstagramLogo}
                alt="Instagram logo"
                width={20}
              />{" "}
              <span className="group-hover:underline">@tabula_musica</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="grow">
        <h1 className="text-lg font-serif uppercase tracking-widest text-cyan-100/80">
          Subscribe
        </h1>
        <div className="flex sm:max-md:flex-col gap-4 py-4 text-lg text-neutral-200">
          <p>
            <Link
              className="px-4 py-2 rounded-full tracking-wider font-serif text-cyan-800 transition-colors bg-amber-100 hover:bg-amber-100/90"
              href="https://lists.srcf.net/mailman/listinfo"
            >
              Mailing&nbsp;List
            </Link>
          </p>
          <p>
            <Link
              className="px-4 py-2 rounded-full tracking-wider font-serif text-cyan-800 transition-colors bg-amber-100 hover:bg-amber-100/90"
              href="/#contact"
            >
              Magazine
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Legal() {
  return (
    <p className="py-4 text-xs font-mono tracking-wide text-neutral-400">
      © 2024 Jeremy Chen. All rights reserved.
    </p>
  );
}
