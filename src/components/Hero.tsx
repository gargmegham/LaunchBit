import Link from "next/link"
import { Playfair_Display } from "next/font/google"

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
        <section className="relative bg-black h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Spotlights */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Left spotlight - Yellow heavy */}
                <div className="absolute -left-32 -top-32 w-[800px] h-[800px] bg-gradient-to-br from-yellow-500/25 via-amber-500/15 to-transparent rounded-full blur-3xl"></div>
                {/* Right spotlight - Amber heavy */}
                <div className="absolute -right-32 -top-32 w-[800px] h-[800px] bg-gradient-to-bl from-amber-500/25 via-yellow-500/15 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Stars Animation */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/40 rounded-full animate-star"
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
            <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
                <h1 className={`text-6xl md:text-8xl font-bold text-white mb-6 leading-tight ${playfair.className}`}>
                    We transform ideas into
                    <span className="block bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                        AI-powered MVPs
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
                    We build and optimize minimum viable products using machine learning, intelligent workflows, and
                    modern development frameworks.
                </p>
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Link
                        href="/#work"
                        className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
                    >
                        View Past Work
                    </Link>
                    <Link
                        href="https://calendly.com/megham-garg/session"
                        target="_blank"
                        className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Brand Scroll */}
                <div className="text-center">
                    <p className="text-white/60 text-sm mb-6 font-semibold">You're in good company</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-scroll whitespace-nowrap gap-8">
                            {[...brands, ...brands].map((brand, index) => (
                                <span
                                    key={index}
                                    className="text-white/40 font-medium text-lg hover:text-white/60 transition-colors"
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
