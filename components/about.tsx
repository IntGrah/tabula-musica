import Restrict from "@/components/util/restrict";

export default function About() {
    return (
        <section className="p-8 text-center sm:text-lg md:text-xl bg-gray-950 text-white">
            <Restrict>
                <h3 className="text-2xl md:text-3xl bold uppercase tracking-wider">
                    Blah
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed quo quaerat ea quisquam, nesciunt illo. Saepe quasi
                    recusandae reiciendis. Pariatur aut dolorum debitis saepe
                    natus placeat beatae atque perspiciatis earum. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Sed quo
                    quaerat ea quisquam, nesciunt illo. Saepe quasi recusandae
                    reiciendis. Pariatur aut dolorum debitis saepe natus placeat
                    beatae atque perspiciatis earum.
                </p>
                <h3 className="text-2xl md:text-3xl bold uppercase tracking-wider">
                    Blah
                </h3>
                <p>
                    <i>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Assumenda dolor commodi fugit fugiat corrupti
                        dolorem consequatur dolore obcaecati ad, sed itaque
                        quaerat facere reprehenderit culpa officia ducimus vero
                        odit deleniti? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Facilis odio modi nostrum blanditiis
                        dignissimos ipsa ratione reiciendis amet dolorem
                        cupiditate? Iusto, facilis fugit consequuntur quia vero
                        doloremque eos eum ipsa.
                    </i>
                </p>
            </Restrict>
        </section>
    );
}
