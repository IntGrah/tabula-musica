import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Email from "/static/email.png";
import InstagramLogo from "/static/instagram.png";

export default function Footer() {
    return (
        <footer id="contact" className="px-8 bg-gray-900">
            <div className="m-auto w-full max-w-5xl">
                <div className="flex flex-wrap py-6 gap-8">
                    <FooterItem title="Contact">
                        <FooterSocial
                            image={{ src: Email, alt: "Email icon" }}
                            href="mailto:tabulamusica@cambridgesu.co.uk"
                        >
                            tabulamusica@cambridgesu.co.uk
                        </FooterSocial>
                        <FooterSocial
                            image={{
                                src: InstagramLogo,
                                alt: "Instagram logon",
                            }}
                            href="https://www.instagram.com/tabula_musica"
                        >
                            @tabula_musica
                        </FooterSocial>
                    </FooterItem>
                    <FooterItem title="Subscribe">
                        <div className="flex flex-wrap gap-4">
                            <FooterButton href="https://lists.srcf.net/mailman/listinfo">
                                Mailing&nbsp;List
                            </FooterButton>
                            <FooterButton href="/#contact">
                                Magazine
                            </FooterButton>
                        </div>
                    </FooterItem>
                </div>

                <hr className="border-neutral-600" />
                <p className="py-4 text-xs font-mono tracking-wide text-neutral-400">
                    © 2024 Tabula Musica. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

function FooterItem({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="grow">
            <h2 className="text-lg font-serif uppercase tracking-widest text-cyan-100">
                {title}
            </h2>
            <div className="py-4 font-mono text-neutral-200">{children}</div>
        </div>
    );
}

function FooterSocial({
    image,
    href,
    children,
}: {
    image: { src: StaticImageData; alt: string };
    href: string;
    children: React.ReactNode;
}) {
    return (
        <p>
            <Image className="inline" {...image} width={20} />
            &nbsp;
            <Link className="tracking-tighter hover:underline" href={href}>
                {children}
            </Link>
        </p>
    );
}

function FooterButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <Link
                className="px-4 py-2 rounded-full tracking-wider font-serif text-cyan-800 transition-colors bg-amber-100 hover:bg-amber-100/90"
                href={href}
            >
                {children}
            </Link>
        </div>
    );
}
