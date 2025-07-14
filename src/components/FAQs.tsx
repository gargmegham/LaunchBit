"use client";

import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        id: 1,
        question: "What is an AI-powered MVP and why do I need one?",
        answer: "An AI-powered MVP (Minimum Viable Product) is a basic version of your product that incorporates artificial intelligence to solve core problems efficiently. It allows you to test your idea with real users, gather feedback, and iterate quickly while leveraging AI to provide intelligent features like automation, personalization, or predictive analytics."
    },
    {
        id: 2,
        question: "How long does it typically take to build an MVP?",
        answer: "Our typical MVP development timeline is 4-8 weeks, depending on complexity. Simple MVPs with basic AI features can be completed in 4-6 weeks, while more complex solutions requiring custom AI models or integrations may take 6-8 weeks. We provide detailed timelines during our discovery phase."
    },
    {
        id: 3,
        question: "What technologies and frameworks do you use?",
        answer: "We use modern, scalable technologies including React, Next.js, Node.js, Python, FastAPI, Django, and cloud platforms like AWS and Vercel. For AI/ML, we work with OpenAI APIs, TensorFlow, PyTorch, and various AI services. We choose the best tech stack based on your specific requirements."
    },
    {
        id: 4,
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and scaling assistance. We provide different support packages ranging from basic maintenance to full ongoing development partnerships."
    },
    {
        id: 5,
        question: "What's included in your MVP development service?",
        answer: "Our MVP service includes: initial consultation and strategy, UI/UX design, full-stack development, AI/ML integration, testing and quality assurance, deployment setup, basic documentation, and 30 days of post-launch support. We also provide analytics setup and performance monitoring."
    },
    {
        id: 6,
        question: "How do you ensure the AI features are reliable and accurate?",
        answer: "We implement robust testing frameworks, use proven AI models and APIs, implement fallback mechanisms, and conduct thorough validation with real data. We also provide monitoring and alerting systems to track AI performance and continuously improve accuracy over time."
    },
    {
        id: 7,
        question: "What are your pricing models?",
        answer: "We offer flexible pricing: fixed-price projects for well-defined MVPs (starting at $15k), hourly rates for ongoing development ($75-150/hour), and retainer packages for long-term partnerships. Pricing depends on complexity, timeline, and specific requirements."
    },
    {
        id: 8,
        question: "Can you help scale my MVP after launch?",
        answer: "Absolutely! We specialize in scaling MVPs to handle growth. This includes performance optimization, infrastructure scaling, feature expansion, team augmentation, and migration to more robust architectures. Many of our clients continue working with us as their technical partner."
    },
    {
        id: 9,
        question: "Do you work with startups or only established companies?",
        answer: "We work with both! We have extensive experience with startups (from pre-seed to Series A) and also serve established companies building new products. We understand the unique challenges of each stage and adapt our approach accordingly."
    },
    {
        id: 10,
        question: "What makes LaunchBit different from other development agencies?",
        answer: "We specialize specifically in AI-powered MVPs, have deep expertise in modern AI/ML technologies, focus on rapid iteration and user feedback, provide end-to-end service from idea to launch, and maintain long-term partnerships with our clients. Our team combines technical excellence with business acumen."
    }
];

export const FAQs = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section id="faqs" className="relative mb-52 overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
                {/* Additional spotlight extending toward footer */}
                <div className="absolute left-0 bottom-0 w-[800px] h-[400px] bg-gradient-to-br from-yellow-500/8 via-amber-500/4 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Subtle dots pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-6">
                    <span className="text-xs sm:text-sm font-semibold tracking-wider bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent uppercase">
                        FAQ
                    </span>
                </div>

                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${playfair.className}`}>
                    Frequently Asked{" "}
                    <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                        Questions
                    </span>
                </h2>

                <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
                    <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-4 sm:mb-6">
                        Everything you need to know about building your AI-powered MVP with LaunchBit.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
                        Have a question that's not covered here? Feel free to reach out to us directly.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3 sm:space-y-4 text-left">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl hover:border-yellow-500/30 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-base sm:text-lg md:text-xl font-semibold text-white pr-4">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0">
                                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center transform transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-45' : ''}`}>
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Still have questions?</h3>
                    <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
                        Can't find the answer you're looking for? Our team is here to help you with any questions about your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a
                            href="/#contact"
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 text-sm sm:text-base"
                        >
                            Contact Us
                        </a>
                        <a
                            href="https://calendly.com/megham-garg/session"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 sm:px-6 py-2 sm:py-3 font-medium relative border-[1px] border-white/10 rounded-lg text-white bg-black hover:border-white/20 transition-all duration-200 text-sm sm:text-base"
                        >
                            <span>Book a Call</span>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};