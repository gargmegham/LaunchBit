import Image from "next/image"

import { PinContainer } from "@/components/3DPin"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const products = [
    {
        name: "Servcy",
        description:
            "Servcy's project tracking ecosystem helps agencies stay on top of thier costs, timeline and deliverables.",
        link: "https://servcy.com",
        image: "/products/servcy.png",
    },
    {
        name: "Jotlify",
        description: "Jotlify provides an easier and faster way to explore research papers.",
        link: "https://jotlify.com",
        image: "/products/jotlify.png",
    },
    {
        name: "ShieldPeer",
        description: "ShieldPeer helps steam gamers sell and buy in-game items securely.",
        link: "https://shieldpeer.in",
        image: "/products/shield-peer.png",
    },
]

export default function Products() {
    return (
        <main id="products" className="bg-grid-amber-500/10">
            <Header />
            <section className="my-20 min-h-[50vh] lg:flex lg:justify-center lg:items-center grid grid-cols-1 gap-16">
                {products.map((product, index) => (
                    <PinContainer title={product.name} href={product.link} key={index}>
                        <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]">
                            <div className="h-24">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-900">
                                    {product.name}
                                </h3>
                                <div className="text-sm !m-0 !p-0 font-normal">
                                    <span className="text-zinc-800">{product.description}</span>
                                </div>
                            </div>
                            <Image
                                className="flex flex-1 w-full rounded mt-4"
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                            />
                        </div>
                    </PinContainer>
                ))}
            </section>
            <Footer />
        </main>
    )
}
