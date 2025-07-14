import { Playfair_Display } from "next/font/google"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"] })

const brands = [
    "TranZact",
    "Mint",
    "ComplianceOn",
    "Mortle",
    "PubTrawlr",
    "Ultanio",
    "FortifyData",
    "Paxcom",
    "Amazon",
    "Allongo",
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-0">
            {/* Spotlights */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Left spotlight - Yellow heavy */}
                <div className="absolute -left-16 sm:-left-32 -top-16 sm:-top-32 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-br from-yellow-500/25 via-amber-500/15 to-transparent rounded-full blur-3xl"></div>
                {/* Right spotlight - Amber heavy */}
                <div className="absolute -right-16 sm:-right-32 -top-16 sm:-top-32 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-bl from-amber-500/25 via-yellow-500/15 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Stars Animation */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[1px] h-[1px] sm:w-[2px] sm:h-[2px] bg-white/40 rounded-full animate-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s, ${Math.random() * 3}s`,
                            animationDuration: `${8 + Math.random() * 4}s, ${3 + Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight ${playfair.className}`}>
                    We transform ideas into
                    <span className="block bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                        AI-powered MVPs
                    </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
                    We build and optimize minimum viable products using machine learning, intelligent workflows, and
                    modern development frameworks.
                </p>
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
                    <Link
                        href="/#work"
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 text-sm sm:text-base"
                    >
                        View Past Work
                    </Link>
                    <Link
                        href="https://calendly.com/megham-garg/session"
                        target="_blank"
                        className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Brand Scroll */}
                <div className="text-center">
                    <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 font-semibold">You're in good company</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll whitespace-nowrap gap-4 sm:gap-6 lg:gap-8">
                            {[...brands, ...brands].map((brand, index) => (
                                <span
                                    key={index}
                                    className="text-white/40 font-medium text-sm sm:text-base lg:text-lg hover:text-white/60 transition-colors flex-shrink-0"
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
