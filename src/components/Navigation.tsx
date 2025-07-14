"use client"

import Image from "next/image"
import Link from "next/link"

import { useState } from "react"

const links = [
    {
        href: "/#services",
        label: "Services",
    },
    {
        href: "/#work",
        label: "Work",
    },
    {
        href: "/#reviews",
        label: "Reviews",
    },
    {
        href: "/#contact",
        label: "Contact",
    },
    {
        href: "/#faqs",
        label: "FAQs",
    },
    {
        href: "/blogs",
        label: "Blogs",
    },
]

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-3 sm:top-6 flex justify-center w-full z-50">
            <div className="bg-white/5 backdrop-blur-md p-3 sm:p-4 rounded-xl flex items-center justify-between max-w-7xl w-full mx-3 sm:mx-4">
                <Link href="/" className="flex items-center">
                    <Image src="/logo-text.png" width="120" height="8" alt="logo" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-6 xl:gap-12">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="link-hover px-2 xl:px-3 py-2 rounded-lg">
                            <span className="text-white font-medium text-sm xl:text-base">{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Link
                        href="https://calendly.com/megham-garg/session"
                        target="_blank"
                        className="font-medium relative px-3 xl:px-4 py-2 border-[1px] border-white/10 rounded-xl text-white bg-black size-full flex items-center justify-center text-sm xl:text-base"
                    >
                        <span className="">Book a Call</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex flex-col gap-1 p-2">
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-2 bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="card-link-hover bg-white/10 rounded-lg p-3 sm:p-4"
                            >
                                <span className="text-white font-medium text-sm sm:text-base">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="https://calendly.com/megham-garg/session"
                        target="_blank"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full font-medium relative px-4 py-3 border-[1px] border-white/10 rounded-xl text-white bg-black flex items-center justify-center text-sm sm:text-base"
                    >
                        <span className="">Book a Call</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                    </Link>
                </div>
            )}
        </nav>
    )
}
