"use client"

import { Playfair_Display } from "next/font/google"

import { useEffect, useId, useRef, useState } from "react"

import { IconArrowNarrowRight } from "@tabler/icons-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

interface SlideData {
    title: string
    button: string
    src: string
    link: string
}

interface SlideProps {
    slide: SlideData
    index: number
    current: number
    handleSlideClick: (index: number) => void
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null)

    const xRef = useRef(0)
    const yRef = useRef(0)
    const frameRef = useRef<number>(null)

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return

            const x = xRef.current
            const y = yRef.current

            slideRef.current.style.setProperty("--x", `${x}px`)
            slideRef.current.style.setProperty("--y", `${y}px`)

            frameRef.current = requestAnimationFrame(animate)
        }

        frameRef.current = requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }
    }, [])

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current
        if (!el) return

        const r = el.getBoundingClientRect()
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
    }

    const handleMouseLeave = () => {
        xRef.current = 0
        yRef.current = 0
    }

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1"
    }

    const { src, button, title, link } = slide

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d] w-[90vmin] sm:w-[80vmin] lg:w-[70vmin] h-[90vmin] sm:h-[80vmin] lg:h-[70vmin]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[90vmin] sm:w-[80vmin] lg:w-[70vmin] h-[90vmin] sm:h-[80vmin] lg:h-[70vmin] mx-[4vmin] z-10 "
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
                    style={{
                        transform:
                            current === index ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none",
                    }}
                >
                    <img
                        className="absolute inset-0 w-full h-full object-contain opacity-100 transition-opacity duration-600 ease-in-out"
                        style={{
                            opacity: current === index ? 1 : 0.5,
                        }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="eager"
                        decoding="sync"
                    />
                    {current === index && <div className="absolute inset-0 transition-all duration-1000" />}
                </div>

                <article
                    className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
                        current === index ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    <div className="flex justify-center">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium relative px-4 py-2 border-[1px] border-white/10 rounded-xl text-white bg-black size-full flex items-center justify-center hover:border-white/20 transition-all duration-200"
                        >
                            <span>{button}</span>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                        </a>
                    </div>
                </article>
            </li>
        </div>
    )
}

interface CarouselControlProps {
    type: string
    title: string
    handleClick: () => void
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
                type === "previous" ? "rotate-180" : ""
            }`}
            title={title}
            onClick={handleClick}
        >
            <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
    )
}

interface CarouselProps {
    slides: SlideData[]
}

const Carousel = ({ slides }: CarouselProps) => {
    const [current, setCurrent] = useState(2)

    const dragStartX = useRef<number>(0)
    const isDragging = useRef(false)

    const handlePreviousClick = () => {
        const previous = current - 1
        setCurrent(previous < 0 ? slides.length - 1 : previous)
    }

    const handleNextClick = () => {
        const next = current + 1
        setCurrent(next === slides.length ? 0 : next)
    }

    const handleSlideClick = (index: number) => {
        if (current !== index) {
            setCurrent(index)
        }
    }

    const handlePointerDown = (e: React.PointerEvent) => {
        dragStartX.current = e.clientX
        isDragging.current = true
        ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    }

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!isDragging.current) return
        isDragging.current = false
        const delta = dragStartX.current - e.clientX
        if (delta > 50) handleNextClick()
        else if (delta < -50) handlePreviousClick()
    }

    const handlePointerCancel = () => {
        isDragging.current = false
    }

    const id = useId()

    const wheelAccum = useRef(0)
    const wheelLocked = useRef(false)

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault()
        if (wheelLocked.current) return
        wheelAccum.current += e.deltaX
        if (wheelAccum.current > 50) {
            wheelLocked.current = true
            handleNextClick()
            setTimeout(() => { wheelAccum.current = 0; wheelLocked.current = false }, 800)
        } else if (wheelAccum.current < -50) {
            wheelLocked.current = true
            handlePreviousClick()
            setTimeout(() => { wheelAccum.current = 0; wheelLocked.current = false }, 800)
        }
    }

    return (
        <div
            className="relative w-[90vmin] sm:w-[80vmin] lg:w-[70vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
        >
            <div
                className="relative w-full h-[90vmin] sm:h-[80vmin] lg:h-[70vmin]"
                onWheel={handleWheel}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                style={{ cursor: "grab" }}
            >
                <ul
                    className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out select-none"
                    style={{
                        transform: `translateX(-${current * (100 / slides.length)}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <Slide
                            key={index}
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={handleSlideClick}
                        />
                    ))}
                </ul>
            </div>

            <div className="flex justify-center w-full mt-4">
                <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
                <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
            </div>
        </div>
    )
}

export const Work = () => {
    const slideData = [
        {
            title: "FortifyData",
            button: "Visit",
            src: "/work/fortifydata.png",
            link: "https://fortifydata.com",
        },
        {
            title: "Jotlify",
            button: "Visit",
            src: "/work/jotlify.png",
            link: "https://jotlify.com",
        },
        {
            title: "Mint",
            button: "Visit",
            src: "/work/mint.png",
            link: "https://mint.us",
        },
        {
            title: "Paxcom",
            button: "Visit",
            src: "/work/paxcom.png",
            link: "https://paxcom.ai",
        },
        {
            title: "Servcy",
            button: "Visit",
            src: "/work/servcy.png",
            link: "https://servcy.com",
        },
        {
            title: "Tranzact",
            button: "Visit",
            src: "/work/tranzact.png",
            link: "https://letstranzact.com",
        },
    ]

    return (
        <section id="work" className="relative mb-52 overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
                {/* Additional spotlight extending toward next section */}
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

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-6">
                    <span className="text-xs sm:text-sm font-semibold tracking-wider bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent uppercase">
                        Our Work
                    </span>
                </div>

                <h2
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${playfair.className}`}
                >
                    Portfolio{" "}
                    <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                        Showcase
                    </span>
                </h2>

                <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
                    <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-4 sm:mb-6">
                        Explore our recent projects and see how we've helped businesses transform their ideas into
                        successful digital products.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
                        Each project represents our commitment to innovation, quality, and delivering exceptional user
                        experiences.
                    </p>
                </div>

                {/* Carousel */}
                <div className="-mt-12 sm:-mt-16 lg:-mt-24">
                    <Carousel slides={slideData} />
                </div>
            </div>
        </section>
    )
}
