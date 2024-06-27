"use client"

import { useRef, useState } from "react"
import type { JSX } from "react"

import config from "@/config"

interface FAQItemProps {
    question: string
    answer: JSX.Element
}

const faqList: FAQItemProps[] = [
    {
        question: "What is Web Hosting?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                Web hosting is a service that allows individuals and organizations to post a website or web page onto
                the Internet. A web host, or web hosting service provider, is a business that provides the technologies
                and services needed for the website or webpage to be viewed on the Internet. Websites are hosted, or
                stored, on special computers called servers. When Internet users want to view your website, all they
                need to do is type your website address or domain into their browser. Their computer will then connect
                to your server and your webpages will be delivered to them through the browser.
            </div>
        ),
    },
    {
        question: `Why host with ${config.appName}?`,
        answer: (
            <p>
                Choosing to host with {config.appName} means benefiting from a web hosting service that prioritizes
                speed, reliability, and security. Our hosting solutions are optimized for performance, ensuring that
                your website loads quickly and runs smoothly. We offer 24/7 monitoring and support to promptly address
                any issues and minimize downtime. Additionally, our hosting packages come with enhanced security
                measures to protect your website from threats. By hosting with {config.appName}, you&apos;re not just
                getting server space; you&apos;re gaining a partner dedicated to ensuring your online presence is robust
                and effective.
            </p>
        ),
    },
    {
        question: "How much does Web Hosting cost?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                The cost of web hosting with {config.appName} varies depending on the type of hosting service you
                require (shared, VPS, dedicated, or cloud hosting), as well as the resources needed for your website,
                such as disk space, bandwidth, and additional features like SSL certificates, email hosting, and more.
                Our hosting plans start at a competitive price point for basic websites and scale up based on your
                specific needs and traffic demands. We offer transparent pricing with no hidden fees and can provide a
                tailored quote based on an evaluation of your hosting requirements.
            </div>
        ),
    },
    {
        question: "Can I purchase my own domain?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                Yes, you can purchase your own domain, and we highly recommend doing so to establish your brand and make
                your website easily accessible. If you haven&apos;t already purchased a domain, we can guide you through
                the process of choosing and registering a domain name that reflects your business and is memorable to
                your audience. Additionally, we can manage the domain on your behalf, ensuring that it&apos;s properly
                configured for your web hosting setup and renewing it as needed to maintain your online presence.
            </div>
        ),
    },
]

const FaqItem = ({ item }: { item: FAQItemProps }) => {
    const accordion = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li>
            <button
                className="relative flex gap-2 items-center w-full py-6 text-left border-t md:text-2xl border-base-content/10"
                onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(!isOpen)
                }}
                aria-expanded={isOpen}
            >
                <span className={`flex-1 text-black ${isOpen ? "text-orange-400" : ""}`}>{item?.question}</span>
                <svg
                    className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"}`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            isOpen && "rotate-180 hidden"
                        }`}
                    />
                </svg>
            </button>

            <div
                ref={accordion}
                className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
                style={
                    isOpen
                        ? {
                              maxHeight: accordion?.current?.scrollHeight,
                              opacity: 1,
                          }
                        : { maxHeight: 0, opacity: 0 }
                }
            >
                <div className="pb-5 leading-relaxed">{item?.answer}</div>
            </div>
        </li>
    )
}

const FAQ = () => {
    return (
        <section className="bg-white text-black max-w-7xl mx-auto py-24 px-4 md:px-8" id="faq">
            <div className="w-full flex flex-col md:flex-row">
                <div className="flex flex-col text-left basis-1/2">
                    <p className="text-5xl font-bold tracking-tight mb-12 md:mb-0">Frequently Asked Questions</p>
                </div>

                <ul className="basis-1/2">
                    {faqList.map((item, i) => (
                        <FaqItem key={i} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FAQ
