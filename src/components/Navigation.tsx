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
        href: "/#products",
        label: "Products",
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
        <nav className="fixed top-6 flex justify-center w-full z-50">
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl flex items-center justify-between max-w-7xl w-full mx-4">
                <Link href="/" className="flex items-center">
                    <Image src="/logo-text.png" width="150" height="10" alt="logo" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex gap-12">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="link-hover px-3 py-2 rounded-lg">
                            <span className="text-white font-medium">{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden xl:block">
                    <Link
                        href="https://calendly.com/megham-garg/session"
                        target="_blank"
                        className="font-medium relative px-4 py-2 border-[1px] border-white/10 rounded-xl text-white bg-black size-full flex items-center justify-center"
                    >
                        <span className="">Book a Call</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden flex flex-col gap-1 p-2">
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
                <div className="xl:hidden absolute top-full left-4 right-4 mt-2 bg-white/5 backdrop-blur-md rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="card-link-hover bg-white/10 rounded-lg p-4"
                            >
                                <span className="text-white font-medium">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="https://calendly.com/megham-garg/session"
                        target="_blank"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full font-medium relative px-4 py-3 border-[1px] border-white/10 rounded-xl text-white bg-black flex items-center justify-center"
                    >
                        <span className="">Book a Call</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                    </Link>
                </div>
            )}
        </nav>
    )
}
