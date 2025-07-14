import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const About = () => {
    return (
        <section className="relative bg-black h-screen overflow-hidden snap-start flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Subtle dots pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                <div className="mb-6">
                    <span className="text-sm font-semibold tracking-wider bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent uppercase">
                        About Us
                    </span>
                </div>

                <h2 className={`text-5xl md:text-7xl font-bold text-white mb-8 leading-tight ${playfair.className}`}>
                    Hi, we're{" "}
                    <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                        LaunchBit
                    </span>
                </h2>

                <div className="max-w-4xl mx-auto mb-12">
                    <p className="text-xl md:text-2xl text-white font-bold mb-6">
                        We transform ideas into AI-powered MVPs to revolutionize how startups approach product
                        development.
                    </p>
                    <p className="text-lg md:text-xl text-white/70 mb-8">
                        We do so with an innovative team of engineers focused on building next-generation solutions.
                    </p>
                </div>

                {/* Additional content */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Rapid Development</h3>
                        <p className="text-white/60">
                            From concept to MVP in weeks, not months, using cutting-edge AI tools and frameworks.
                        </p>
                    </div>

                    <div className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                        <p className="text-white/60">
                            Skilled engineers with expertise in modern tech stacks, AI integration, and scalable
                            architecture.
                        </p>
                    </div>

                    <div className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Solutions</h3>
                        <p className="text-white/60">
                            Leveraging machine learning and intelligent automation to build smarter, more efficient
                            products.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
