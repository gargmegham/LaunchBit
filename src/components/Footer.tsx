import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="relative bg-black text-white py-16">
            {/* Star background effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <Image src="/star.png" alt="" width={400} height={400} className="opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-amber-500/20 to-transparent rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">About Us</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-white/60 mb-2">Email</p>
                                <Link
                                    href="mailto:hello@launchbit.in"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                                >
                                    hi@launchbit.in
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/#services"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#work"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#reviews"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#faqs"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blogs"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Social Media</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="https://www.linkedin.com/company/launch-bit/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.youtube.com/@megham_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    YouTube
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://x.com/garg_megham"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    X/Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/tos"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Terms & conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/refund-cancellation-policy"
                                    className="text-white/80 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    Refunds & Cancellation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white/60 text-sm">© 2025, LaunchBit Inc.</p>
                        <div className="flex items-center mt-4 md:mt-0">
                            <span className="text-white/60 text-sm mr-2">Founder:</span>
                            <Link
                                href="https://meghamgarg.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-yellow-400 transition-colors duration-200 text-sm"
                            >
                                Megham Garg
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
