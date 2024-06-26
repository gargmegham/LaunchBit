import Image from "next/image"
import Link from "next/link"

import alliancemock from "@/public/alliance/alliance-layout1.webp"
import alliancemock2 from "@/public/alliance/alliance-layout2.webp"
import alliance from "@/public/alliance/alliance.webp"
import alliance2 from "@/public/alliance/alliance2.webp"
import alliance3 from "@/public/alliance/alliance3.webp"
import alliance4 from "@/public/alliance/alliance4.webp"
import ignite from "@/public/ignite.webp"
import resilient from "@/public/resilient.webp"
import voics from "@/public/voics.webp"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Alliance() {
    return (
        <>
            <Header />
            <section className="w-full max-w-7xl bg-white flex flex-col items-center mx-auto px-4 md:px-8 py-24">
                <div className="flex flex-wrap gap-6 w-full mb-12">
                    <p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">Web Design</p>
                    <p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">Web Development</p>
                    <p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">SEO</p>
                </div>
                <h1 className="font-bold text-6xl w-full text-left mb-12 tracking-tight">Alliance Coaching</h1>
                <h2 className="font-semibold text-2xl w-full text-left tracking-tight mb-12">
                    An online coaching brand that focuses on results and longterm success.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col">
                        <Image
                            src={alliance2}
                            alt="Alliance Coaching"
                            placeholder="blur"
                            className="object-cover w-full rounded-xl"
                        />
                        <Image
                            src={alliance3}
                            alt="Alliance Coaching"
                            placeholder="blur"
                            className="object-cover w-full rounded-xl mt-8"
                        />
                        <div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
                            <h3 className="font-bold text-3xl mb-4 tracking-tight">Social Proof</h3>
                            <p className="mb-4">
                                Trust is crucial. We showcased ample social proof through transformations and client
                                testimonials to demonstrate the real results achieved through the coaching process.
                                Social proof builds credibility and trust, showing potential clients the tangible
                                benefits of embarking on their fitness journey with Alliance Coaching.
                            </p>
                        </div>
                        <Image
                            src={alliancemock}
                            alt="Alliance Coaching"
                            className="object-cover w-full rounded-xl mt-8"
                        />
                    </div>
                    <div className="flex flex-col ">
                        <Image
                            src={alliance}
                            alt="Alliance Coaching"
                            placeholder="blur"
                            className="object-cover w-full rounded-xl"
                        />
                        <div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
                            <h3 className="font-bold text-3xl mb-4 tracking-tight">Brand Identity</h3>
                            <p className="mb-4">
                                Alliance Coaching was a new brand that needed a website to showcase their services and
                                attract new clients. They wanted a website that was modern, professional, and easy to
                                navigate. We used a combination of high-quality images and engaging copy to showcase
                                their services and attract new clients. We also optimized the website for search engines
                                to help improve their online visibility.
                            </p>
                        </div>
                        <Image
                            src={alliancemock2}
                            alt="Alliance Coaching"
                            className="object-cover w-full rounded-xl mt-8"
                        />
                        <Image
                            src={alliance4}
                            alt="Alliance Coaching"
                            placeholder="blur"
                            className="object-cover w-full rounded-xl mt-8"
                        />
                        <div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
                            <h3 className="font-bold text-3xl mb-4 tracking-tight">Conversion</h3>
                            <p className="mb-4">
                                Central to the website&apos;s design are conversion pathways engineered to turn visitors
                                into leads. Calls to action beckon the visitor closer to making a commitment, whether
                                it&apos;s through engaging with the free content, scheduling a personal consultation, or
                                enquiring furhter. These CTAs are not just prompts but bridges over the gap between
                                interest and action, carefully placed to reduce hesitation and simplify the
                                decision-making process.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-12">
                    <h2 className="font-bold text-5xl w-full text-left tracking-tight mt-12">More Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
                        <Link href="/ignite" className="group">
                            <div className="overflow-hidden rounded-xl w-fit h-fit">
                                <Image
                                    src={ignite}
                                    alt="Ignite Coaching"
                                    width={600}
                                    height={600}
                                    placeholder="blur"
                                    className="object-cover w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                            <h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">Ignite</h3>
                        </Link>
                        <Link href="/voics" className="group w-full">
                            <div className="overflow-hidden rounded-xl w-full">
                                <Image
                                    src={voics}
                                    alt="Voics"
                                    width={600}
                                    height={600}
                                    placeholder="blur"
                                    className="object-fill w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                            <h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">Voics</h3>
                        </Link>
                        <Link href="/resilient" className="overflow-hidden rounded-xl group">
                            <div className="overflow-hidden rounded-xl w-fit h-fit">
                                <Image
                                    src={resilient}
                                    alt="Resilient Intent Coaching"
                                    width={600}
                                    height={600}
                                    placeholder="blur"
                                    className="object-cover w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                            <h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">Resilient Intent</h3>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
