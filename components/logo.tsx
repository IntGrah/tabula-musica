export default function Logo() {
    return (
        <div className="relative h-16 px-8 text-center">
            <div className="py-4">
                <a
                    className="font-medium text-2xl tracking-[0.2em] uppercase text-violet-900 select-none"
                    href="/"
                >
                    Tabula&nbsp;Musica
                </a>
            </div>
            <hr className="absolute bottom-2 m-auto left-[15%] w-[70%] border-violet-900" />
        </div>
    );
}
