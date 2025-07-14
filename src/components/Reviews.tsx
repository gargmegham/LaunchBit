"use client"

import { Playfair_Display } from "next/font/google"

import { useEffect, useState } from "react"

const playfair = Playfair_Display({ subsets: ["latin"] })

interface Review {
    id: number
    text: string
    author: string
    position: string
    company: string
    logo?: string
}

const reviews: Review[] = [
    {
        id: 1,
        text: "LaunchBit is extremely proactive and comprehensive in assessing project requirements. Their professional communication and support throughout the entire development process is exceptional. 100% recommend their services.",
        author: "Victor Gamra",
        position: "CEO",
        company: "ComplianceOn",
    },
    {
        id: 2,
        text: "LaunchBit delivered fast, clean, and precise execution on our React and Django project. They understood our compliance requirements immediately and handled the technical complexity without handholding. We're hiring them again immediately.",
        author: "Amy DeGregorio",
        position: "CTO",
        company: "FortifyData",
    },
    {
        id: 3,
        text: "Working with LaunchBit has been fantastic. They worked great with our team and filled in our expertise gaps without needing to take the project over. They're experts who know how to work as part of a team - not all experts are that way!",
        author: "David Martinez",
        position: "Engineering Manager",
        company: "Amazon",
    },
    {
        id: 4,
        text: "LaunchBit is that rare agency that pairs deep technical skill with crisp, proactive communication. They installed & configured our AI agents workflow and shipped a fully tested FastAPI service that hit all performance targets. Every question came with solutions, not problems.",
        author: "M. Murphy",
        position: "Founder",
        company: "Mint",
    },
    {
        id: 5,
        text: "LaunchBit was able to build our complicated system architecture very efficiently. The work quality was exceptional and they grasped exactly what we needed. We couldn't have been happier with their technical expertise and delivery speed.",
        author: "Garry Stevens",
        position: "Technical Lead",
        company: "Paxcom",
    },
    {
        id: 6,
        text: "LaunchBit is incredibly skilled at problem-solving and coming up with innovative solutions quickly. Their attention to detail and ability to deliver clean, scalable code consistently impresses us. Can't wait to work with them again.",
        author: "Rohan Sen",
        position: "Product Manager",
        company: "Tranzact",
    },
    {
        id: 7,
        text: "LaunchBit listens to clients and is always ready to go that extra step to ensure satisfaction. Their technical knowledge combined with excellent project management makes them invaluable partners for any development project.",
        author: "Dale Richardson",
        position: "VP Engineering",
        company: "Mortle",
    },
    {
        id: 8,
        text: "LaunchBit completed our Django Rest Framework integration quickly with intelligent solutions. We got more done in our first sprint with them than we would have achieved on our own in weeks. Highly recommend for complex backend work.",
        author: "Thorsten Weber",
        position: "CTO",
        company: "Ultanio",
    },
    {
        id: 9,
        text: "LaunchBit delivered our project with clean, legible code and proper documentation. They were always available for communication and delivered faster than expected. You get more than your money's worth with their services.",
        author: "Jackson Moore",
        position: "Lead Developer",
        company: "Allongo",
    },
    {
        id: 10,
        text: "LaunchBit has been our go-to development partner for multiple projects. They're trustworthy, deliver quality work consistently, and understand both the technical and business sides of product development. We'll definitely continue working with them.",
        author: "Drew Chen",
        position: "Founder",
        company: "Allongo",
    },
]

export const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
                setTimeout(() => {
                    setIsTransitioning(false)
                }, 50)
            }, 300)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const handleDotClick = (index: number) => {
        if (index !== currentIndex) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex(index)
                setTimeout(() => {
                    setIsTransitioning(false)
                }, 50)
            }, 300)
        }
    }

    const visibleReviews = [
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length],
        reviews[(currentIndex + 2) % reviews.length],
    ]

    return (
        <section id="reviews" className="relative mb-52 overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
                {/* Additional spotlight extending toward next section */}
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-6">
                    <span className="text-xs sm:text-sm font-semibold tracking-wider bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent uppercase">
                        Client Reviews
                    </span>
                </div>

                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${playfair.className}`}>
                    Here's what our{" "}
                    <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                        clients say
                    </span>
                </h2>

                <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
                    <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-4 sm:mb-6">
                        Hear the success stories of the businesses we've helped thrive with innovative solutions.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
                        From startups to enterprise companies, our clients trust us to deliver exceptional results.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="relative overflow-hidden">
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto transition-all duration-700 ease-in-out ${
                            isTransitioning
                                ? "opacity-0 transform translate-y-8 scale-95"
                                : "opacity-100 transform translate-y-0 scale-100"
                        }`}
                    >
                        {visibleReviews.map((review) => (
                            <div
                                key={`${review.id}-${currentIndex}`}
                                className={`group p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 text-left`}
                            >
                                <div className="mb-4">
                                    <div className="flex text-yellow-500 mb-3 justify-start">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm sm:text-base text-white/90 italic leading-relaxed text-left">"{review.text}"</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                                        <span className="text-black font-bold text-sm sm:text-lg">
                                            {review.author
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-semibold text-left text-sm sm:text-base">{review.author}</p>
                                        <p className="text-white/60 text-xs sm:text-sm text-left">
                                            {review.position} at {review.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-yellow-500 w-6" : "bg-white/30 hover:bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
