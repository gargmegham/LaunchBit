import Image from "next/image"
import Link from "next/link"

import config from "@/config"
import { getSEOTags } from "@/libs/seo"
import stock1 from "@/public/stock1.webp"
import stock2 from "@/public/stock2.webp"
import stock3 from "@/public/stock3.webp"
import stock4 from "@/public/stock4.webp"
import stock5 from "@/public/stock5.webp"

import CTA2 from "@/components/CTA2"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = getSEOTags({
    title: `${config.appName} | Services`,
    canonicalUrlRelative: "/services",
})

export default function Services() {
    return (
        <>
            <Header />
            <section id="services" className="flex flex-col items-center bg-white text-black w-full max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center px-4 md:px-8 py-24 w-full ">
                    <div className="flex flex-col md:flex-row w-full md:gap-24 justify-between items-start">
                        <h3 className="text-7xl font-bold text-left w-full mb-8 lg:mb-0">Design</h3>
                        <div className="flex flex-col items-start justify-start w-full">
                            <Link
                                href="/web-design"
                                className="flex w-full items-center group relative pb-6 border-b border-gray-950/10 cursor-pointer"
                            >
                                <Image
                                    src={stock1}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    Web Design
                                </h3>
                            </Link>

                            <Link
                                href="/shopify"
                                className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer"
                            >
                                <Image
                                    src={stock2}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    Shopify
                                </h3>
                            </Link>
                            <Link
                                href="/content-writing"
                                className="flex w-full items-center group relative py-6 cursor-pointer"
                            >
                                <Image
                                    src={stock3}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    Content Writing
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:gap-24 justify-between items-start mt-12">
                        <h3 className="text-7xl font-bold text-left w-full mb-8 lg:mb-0">Develop</h3>
                        <div className="flex flex-col items-start justify-start w-full">
                            <Link
                                href="/web-dev"
                                className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer"
                            >
                                <Image
                                    src={stock4}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    Web Development
                                </h3>
                            </Link>
                            <Link
                                href="/ecom"
                                className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer"
                            >
                                <Image
                                    src={stock5}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    eCommerce
                                </h3>
                            </Link>
                            <Link href="/seo" className="flex w-full items-center group relative py-6  cursor-pointer">
                                <Image
                                    src={stock1}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    SEO
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:gap-24 justify-between items-start mt-12">
                        <h3 className="text-7xl font-bold text-left w-full mb-8 lg:mb-0">Support</h3>
                        <div className="flex flex-col items-start justify-start w-full">
                            <Link
                                href="/web-hosting"
                                className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer"
                            >
                                <Image
                                    src={stock2}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    Web Hosting
                                </h3>
                            </Link>
                            <Link
                                href="/lead-gen"
                                className="flex w-full items-center group relative pt-6 cursor-pointer"
                            >
                                <Image
                                    src={stock4}
                                    alt="corporate"
                                    height={100}
                                    width={100}
                                    className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
                                />
                                <h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
                                    Lead Generation
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-full gap-12 justify-between items-start"></div>
                </div>
            </section>
            <CTA2 />
            <Footer />
        </>
    )
}
