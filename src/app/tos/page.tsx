import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function TermsOfService() {
    return (
        <div className="min-h-screen pt-16 bg-black text-white">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/8 via-amber-500/4 to-transparent rounded-full blur-3xl"></div>
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

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1
                        className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight ${playfair.className}`}
                    >
                        Terms of{" "}
                        <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                            Service
                        </span>
                    </h1>
                    <p className="text-lg text-white/70">Effective Date: January 1, 2024</p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-white/80 leading-relaxed">
                                By accessing or using LaunchBit's services, you agree to be bound by these Terms of
                                Service ("Terms"). If you disagree with any part of these terms, you may not access or
                                use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                LaunchBit provides AI-powered MVP development services including:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>Custom software development and AI integration</li>
                                <li>MVP design and development services</li>
                                <li>Technical consulting and strategy</li>
                                <li>Ongoing support and maintenance</li>
                                <li>Related technical services as agreed upon</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Client Obligations</h2>
                            <p className="text-white/80 leading-relaxed mb-4">As a client, you agree to:</p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>Provide accurate and complete information necessary for project completion</li>
                                <li>Respond to requests for information in a timely manner</li>
                                <li>Make payments according to the agreed schedule</li>
                                <li>Provide necessary access to systems, accounts, and resources</li>
                                <li>Review and approve deliverables within specified timeframes</li>
                                <li>Comply with all applicable laws and regulations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                            <p className="text-white/80 leading-relaxed mb-4">Payment terms are as follows:</p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>
                                    Projects may require an upfront deposit (typically 25-50% of total project cost)
                                </li>
                                <li>Invoices are payable within 30 days of receipt unless otherwise agreed</li>
                                <li>Late payments may incur a 1.5% monthly service charge</li>
                                <li>All fees are non-refundable unless otherwise stated in writing</li>
                                <li>Disputed invoices must be raised within 30 days of receipt</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Intellectual property rights are allocated as follows:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>
                                    Upon full payment, client receives ownership of custom-developed code and
                                    deliverables
                                </li>
                                <li>
                                    LaunchBit retains rights to general methodologies, frameworks, and pre-existing IP
                                </li>
                                <li>Third-party libraries and tools remain subject to their respective licenses</li>
                                <li>LaunchBit may use project experience as case studies (with client approval)</li>
                                <li>Client warrants they have rights to all materials provided to LaunchBit</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                            <p className="text-white/80 leading-relaxed">
                                Both parties agree to maintain confidentiality of proprietary information shared during
                                the engagement. This includes business strategies, technical specifications, financial
                                information, and any other sensitive data. Confidentiality obligations survive
                                termination of services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                            <p className="text-white/80 leading-relaxed">
                                LaunchBit's liability is limited to the amount paid for services. We are not liable for
                                indirect, incidental, special, or consequential damages. Services are provided "as is"
                                without warranties beyond those expressly stated in writing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                            <p className="text-white/80 leading-relaxed">
                                Either party may terminate services with 30 days' written notice. Upon termination,
                                client pays for all work completed and expenses incurred. Termination clauses in
                                specific project agreements take precedence over these general terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Dispute Resolution</h2>
                            <p className="text-white/80 leading-relaxed">
                                Disputes will be resolved through binding arbitration in accordance with the rules of
                                the American Arbitration Association. The arbitration will be conducted in English and
                                governed by the laws of the jurisdiction where LaunchBit is headquartered.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                            <p className="text-white/80 leading-relaxed">
                                LaunchBit reserves the right to modify these Terms at any time. Changes will be posted
                                on our website and become effective immediately. Continued use of services constitutes
                                acceptance of modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                            <p className="text-white/80 leading-relaxed">
                                For questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg">
                                <p className="text-white/80">
                                    Email: megham@launchbit.in
                                    <br />
                                    Website: https://launchbit.in
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
