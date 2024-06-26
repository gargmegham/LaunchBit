"use client"

import { useRef, useState } from "react"
import type { JSX } from "react"

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
    question: string
    answer: JSX.Element
}

const faqList: FAQItemProps[] = [
    {
        question: "What is Shopify?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                Shopify is a leading e-commerce platform that allows individuals and businesses to create their own
                online stores. It provides a comprehensive set of tools to sell products directly on your website,
                across social media channels, and through online marketplaces. Shopify is known for its ease of use,
                scalability, and robust set of features, including inventory management, marketing and SEO tools,
                analytics, and mobile compatibility. It enables merchants to manage their shops across multiple channels
                seamlessly and is suitable for businesses of all sizes, from small startups to large enterprises.
            </div>
        ),
    },
    {
        question: "Are we the right Shopify Developer / Shopify Agency for you?",
        answer: (
            <p>
                Choosing the right Shopify developer or agency depends on your specific needs, budget, and the level of
                customization you require. As a specialized web design agency with extensive experience in Shopify
                development, we focus on creating custom, scalable, and user-friendly e-commerce solutions. If
                you&apos;re looking for an agency that prioritizes understanding your business goals, offers
                personalized service, and has a proven track record of delivering successful Shopify stores, then we
                might be the perfect fit for you. We encourage discussing your project with us to determine how our
                skills align with your vision.
            </p>
        ),
    },
    {
        question: "Why choose Shopify?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                Shopify is an excellent choice for e-commerce businesses due to its comprehensive features, scalability,
                and ease of use. It offers a wide range of customizable templates to create a professional-looking
                online store without needing extensive web development knowledge. Additionally, Shopify provides
                reliable hosting, secure payment gateways, and 24/7 customer support, making it a hassle-free solution
                for merchants. Its built-in tools for SEO, marketing, and analytics also help businesses grow their
                online presence efficiently.
            </div>
        ),
    },
    {
        question: "What are the benefits of Shopify?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                Shopify&apos;s unique benefits include:
                <br />
                <br />
                Ease of Use: An intuitive interface and drag-and-drop editor make it simple for anyone to build and
                manage an online store.
                <br />
                <br />
                Scalability: Shopify can support businesses as they grow, from a small startup to a large enterprise,
                without the need for platform migration.
                <br />
                <br />
                Integrated Payment Processing: Shopify Payments allows you to accept credit cards directly, without
                third-party accounts.
                <br />
                <br />
                Comprehensive E-commerce Features: Includes inventory management, unlimited products, powerful
                analytics, and more.
                <br />
                <br />
                Extensive App Marketplace: Access to thousands of apps to extend your store&apos;s functionality.
                <br />
                <br />
                24/7 Support: Round-the-clock customer support via phone, email, and live chat.
            </div>
        ),
    },
    {
        question: "Why should I use Shopify over more known platforms?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                Shopify stands out even among well-known platforms for its user-friendliness, comprehensive e-commerce
                tools, and scalability. Its dedication to providing a seamless merchant and customer experience makes it
                a top choice for businesses looking to grow online. Unlike other platforms that may require additional
                hosting or extensive coding knowledge, Shopify offers a unified solution with minimal setup. Its robust
                support system and extensive knowledge base also ensure that you have the resources to solve any issues
                that arise.
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
            <div className="w-full  flex flex-col md:flex-row">
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
