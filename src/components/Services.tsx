"use client"

import { Playfair_Display } from "next/font/google"

import { useState } from "react"

import { AnimatePresence, motion } from "motion/react"

const playfair = Playfair_Display({ subsets: ["latin"] })

const services = [
    {
        title: "Full Stack MVP Development",
        description:
            "Complete product development from concept to deployment, engineered for scalability and market readiness.",
        detail: "Modern frameworks • Cloud infrastructure • Rapid iteration cycles",
        visual: "code",
    },
    {
        title: "AI Assistants & Automation",
        description:
            "Intelligent systems that handle customer interactions, scheduling, and business processes with human-like precision.",
        detail: "Natural language processing • Computer vision • Voice synthesis",
        visual: "voice",
    },
    {
        title: "Workflow Automation",
        description:
            "Streamlined business processes that eliminate manual work and increase operational efficiency across your organization.",
        detail: "Process optimization • Integration pipelines • Smart routing",
        visual: "workflow",
    },
    {
        title: "Scalable Infrastructure",
        description:
            "Backend architecture designed to handle exponential user growth while maintaining performance and reliability.",
        detail: "Auto-scaling systems • Load balancing • Database optimization",
        visual: "scale",
    },
]

export const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
        <section id="services" className="relative mb-52 overflow-hidden flex items-center justify-center">
            {/* Yellow/amber spotlight gradient centered */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* White rectangular grid pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KICA8L3N2Zz4=')] opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <span className="text-sm font-semibold tracking-[0.2em] text-yellow-400/80 uppercase">
                        Our Services
                    </span>
                    <h2
                        className={`text-6xl md:text-7xl font-bold text-white mb-8 leading-tight ${playfair.className}`}
                    >
                        What We{" "}
                        <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                            Craft
                        </span>
                    </h2>
                    <div className="max-w-4xl mx-auto mb-12">
                        <p className="text-xl md:text-2xl text-white font-bold mb-6">
                            From concept to deployment, we deliver end-to-end solutions that scale with your vision.
                        </p>
                        <p className="text-lg md:text-xl text-white/70 mb-8">
                            Our comprehensive suite of services combines cutting-edge technology with proven
                            methodologies to accelerate your digital transformation.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative block p-2 h-full w-full"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full bg-gradient-to-br from-yellow-500/[0.08] via-amber-500/[0.05] to-yellow-600/[0.08] block rounded-xl"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>

                            <div className="relative bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-sm rounded-xl border border-white/[0.05] group-hover:border-yellow-500/20 transition-all duration-300 p-8 h-full z-20">
                                <div className="relative z-50">
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400/90 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/60 text-base leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <div className="text-yellow-400/60 text-sm font-medium tracking-wide">
                                            {service.detail}
                                        </div>
                                    </div>
                                </div>
                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
