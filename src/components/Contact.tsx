"use client"

import { Playfair_Display } from "next/font/google"
import Link from "next/link"

import { useState } from "react"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus("success")
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    message: "",
                })
            } else {
                setSubmitStatus("error")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="relative mb-52 overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
                {/* Additional spotlight extending toward footer */}
                <div className="absolute right-0 bottom-0 w-[800px] h-[400px] bg-gradient-to-br from-yellow-500/8 via-amber-500/4 to-transparent rounded-full blur-3xl"></div>
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="mb-6">
                        <span className="text-xs sm:text-sm font-semibold tracking-wider bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent uppercase">
                            Get In Touch
                        </span>
                    </div>

                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${playfair.className}`}
                    >
                        Let's build your{" "}
                        <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                            next project
                        </span>
                    </h2>

                    <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
                        <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-4 sm:mb-6">
                            Ready to transform your idea into an AI-powered MVP? Let's discuss your project
                            requirements.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
                            Schedule a consultation or send us a message to get started on your next innovative
                            solution.
                        </p>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Contact Form - Takes up 2/3 width on large screens */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all duration-200"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all duration-200"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                                        Company (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all duration-200"
                                        placeholder="Your company name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all duration-200 resize-vertical"
                                        placeholder="Tell us about your project, requirements, timeline, and budget..."
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                                        <p className="text-green-400 text-sm font-medium">
                                            Thank you! Your message has been sent successfully. We'll get back to you
                                            soon.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                                        <p className="text-red-400 text-sm font-medium">
                                            Sorry, there was an error sending your message. Please try again or contact
                                            us directly.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Stacked cards */}
                    <div className="space-y-6">
                        {/* Quick Book Call */}
                        <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Prefer to talk?</h3>
                            <p className="text-white/70 mb-4 text-sm">
                                Book a 30-minute consultation call to discuss your project in detail.
                            </p>
                            <Link
                                href="https://calendly.com/megham-garg/session"
                                target="_blank"
                                className="inline-flex items-center px-4 py-2 font-medium relative border-[1px] border-white/10 rounded-lg text-white bg-black hover:border-white/20 transition-all duration-200 text-sm"
                            >
                                <span>Book a Call</span>
                                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                            </Link>
                        </div>

                        {/* Contact Methods */}
                        <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Reach us</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Email</p>
                                        <p className="text-white/60 text-xs">megham@launchbit.in</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Location</p>
                                        <p className="text-white/60 text-xs">Remote & Global</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Response Time</p>
                                        <p className="text-white/60 text-xs">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Process Overview */}
                        <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">What happens next?</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <span className="text-black font-bold text-xs">1</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Discovery Call</p>
                                        <p className="text-white/60 text-xs">We'll discuss your project requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <span className="text-black font-bold text-xs">2</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Proposal</p>
                                        <p className="text-white/60 text-xs">Receive detailed project proposal</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <span className="text-black font-bold text-xs">3</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">Development</p>
                                        <p className="text-white/60 text-xs">We start building your MVP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
