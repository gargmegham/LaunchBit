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
        question: "What is content writing?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                Content writing is the process of planning, writing, and editing web content, typically for digital
                marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as
                well as content for specific platforms such as tweetstorms on Twitter or text posts on Instagram. In the
                context of web design, content writing is critical for creating the textual content for websites, which
                may include writing the copy on landing pages, product pages, about us pages, and more. The goal of
                content writing is to engage the audience, convey your message effectively, and prompt action, such as
                making a purchase or contacting your business.
            </div>
        ),
    },
    {
        question: "Why is content important for my business?",
        answer: (
            <p>
                Content is vital for your business for several reasons. It helps to establish your brand voice and
                communicate your value proposition to your target audience. Well-crafted content can significantly
                improve your website&apos;s search engine optimization (SEO), increasing your visibility in search
                engine results and driving more organic traffic to your site. Additionally, engaging and informative
                content can educate your audience, build trust, and influence their purchasing decisions. Content is a
                crucial component of digital marketing strategies, as it helps to attract and retain customers by
                providing them value.
            </p>
        ),
    },
    {
        question: "How much does content writing cost?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                The cost of content writing services can vary widely depending on several factors, including the length
                and complexity of the content, the level of expertise required, the research involved, and the
                writer&apos;s experience. Quality content is an investment that can significantly benefit your business
                by improving your online presence, engaging your audience, and driving sales.
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
