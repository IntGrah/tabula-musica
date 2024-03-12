import Image from "next/image";
import LisztSonataEnd from "/public/liszt-sonata-end.jpg";

export default function LisztPage() {
    return (
        <article className="p-8 font-serif">
            <section className="flex flex-col gap-8 m-auto p-8 max-w-5xl sm:text-lg md:text-xl tracking-wide">
                <h1 className="max-w-xl text-5xl">
                    Lorem Ipsum dolor sit amet Consectetur
                </h1>
                <h2 className="max-w-xl text-3xl">
                    Adipiscing elit, totam quod consequuntur ducimus aliquam?
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam quod consequuntur ducimus aliquam? Necessitatibus
                    ullam magni natus quisquam vero reiciendis delectus quo
                    perferendis! Ipsum eius nihil similique officiis blanditiis
                    ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Odio architecto et sit doloremque similique voluptatem
                    sunt porro maiores ea ad voluptas earum aperiam perspiciatis
                    alias beatae ut, dicta fugit cumque? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Animi et quo excepturi
                    facilis exercitationem sequi ad distinctio obcaecati error
                    natus ut impedit mollitia vero consequatur dolore quis
                    asperiores, fugiat accusantium.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam quod consequuntur ducimus aliquam? Necessitatibus
                    ullam magni natus quisquam vero reiciendis delectus quo
                    perferendis! Ipsum eius nihil similique officiis blanditiis
                    ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Odio architecto et sit doloremque similique voluptatem
                    sunt porro maiores ea ad voluptas earum aperiam perspiciatis
                    alias beatae ut, dicta fugit cumque?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam quod consequuntur ducimus aliquam? Necessitatibus
                    ullam magni natus quisquam vero reiciendis delectus quo
                    perferendis! Ipsum eius nihil similique officiis blanditiis
                    ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Odio architecto et sit doloremque similique voluptatem
                    sunt porro maiores ea ad voluptas earum aperiam perspiciatis
                    alias beatae ut, dicta fugit cumque?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam quod consequuntur ducimus aliquam? Necessitatibus
                    ullam magni natus quisquam vero reiciendis delectus quo
                    perferendis! Ipsum eius nihil similique officiis blanditiis
                    ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Odio architecto et sit doloremque similique voluptatem
                    sunt porro maiores ea ad voluptas earum aperiam perspiciatis
                    alias beatae ut, dicta fugit cumque? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Animi et quo excepturi
                    facilis exercitationem sequi ad distinctio obcaecati error
                    natus ut impedit mollitia vero consequatur dolore quis
                    asperiores, fugiat accusantium. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Nisi sapiente doloribus
                    pariatur ipsum optio vero delectus impedit corrupti debitis
                    obcaecati facere, facilis culpa aliquid autem repellendus
                    minus, dicta, iure aspernatur! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero unde non temporibus
                    labore. Illum sapiente similique culpa reiciendis veniam
                    iure illo quia necessitatibus enim rem nisi, fugit, ea,
                    voluptas vitae. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsam rerum mollitia libero! Porro fugiat,
                    impedit, voluptates consectetur dolorum inventore eligendi,
                    similique maiores mollitia vel fugit alias laudantium autem
                    officia at.
                </p>
                <p>
                    <figure className="max-sm:mb-8 sm:ml-8 w-full max-w-80 sm:float-right">
                        <Image
                            src={LisztSonataEnd}
                            alt="Manuscript of Liszt Sonata ending"
                        />
                        <figcaption className="italic text-gray-600">
                            Image caption
                        </figcaption>
                    </figure>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit est dicta exercitationem, autem enim tempora
                    perspiciatis. Labore officia laborum soluta, iusto nesciunt
                    fuga omnis culpa magni iure alias repellendus tenetur? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                    minus at cum voluptatum dolore cumque libero ea. Ipsam
                    voluptatibus nobis exercitationem, nihil ex, fuga, aperiam
                    in tempore rerum dicta similique. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Enim, animi sit vitae
                    obcaecati neque quod fuga quia culpa quam ullam cumque
                    harum. Unde nihil nobis voluptatum consequatur est odit
                    molestias. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Placeat, quisquam officia? Ea aspernatur
                    tenetur modi aut natus porro perferendis vel itaque. Ipsam
                    ad ab quos beatae nemo excepturi, error hic!
                </p>
            </section>
        </article>
    );
}
