import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black pt-16 text-white">
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
                        Privacy{" "}
                        <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                            Policy
                        </span>
                    </h1>
                    <p className="text-lg text-white/70">Effective Date: January 1, 2024</p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p className="text-white/80 leading-relaxed">
                                At LaunchBit, we are committed to protecting your privacy and personal information. This
                                Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you use our AI-powered MVP development services and visit our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                                    <ul className="list-disc list-inside text-white/80 space-y-2">
                                        <li>Name, email address, and contact information</li>
                                        <li>Company name and job title</li>
                                        <li>Project requirements and business information</li>
                                        <li>Payment and billing information</li>
                                        <li>Communication preferences</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
                                    <ul className="list-disc list-inside text-white/80 space-y-2">
                                        <li>IP address and device information</li>
                                        <li>Browser type and version</li>
                                        <li>Website usage data and analytics</li>
                                        <li>Cookies and similar tracking technologies</li>
                                        <li>System logs and error reports</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Project-Related Information
                                    </h3>
                                    <ul className="list-disc list-inside text-white/80 space-y-2">
                                        <li>Business requirements and specifications</li>
                                        <li>Technical documentation and assets</li>
                                        <li>Feedback and communications</li>
                                        <li>Project progress and deliverables</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>Provide and deliver our MVP development services</li>
                                <li>Communicate with you about projects and updates</li>
                                <li>Process payments and manage billing</li>
                                <li>Improve our services and user experience</li>
                                <li>Comply with legal obligations and enforce agreements</li>
                                <li>Send marketing communications (with your consent)</li>
                                <li>Analyze usage patterns and optimize website performance</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                4. Information Sharing and Disclosure
                            </h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information. We may share your information
                                only in the following circumstances:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Service Providers</h3>
                                    <p className="text-white/80 leading-relaxed">
                                        We may share information with trusted third-party service providers who assist
                                        us in delivering our services, such as hosting providers, payment processors,
                                        and analytics tools.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Legal Requirements</h3>
                                    <p className="text-white/80 leading-relaxed">
                                        We may disclose information when required by law, court order, or government
                                        regulation, or when necessary to protect our rights, property, or safety.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Business Transfers</h3>
                                    <p className="text-white/80 leading-relaxed">
                                        In the event of a merger, acquisition, or sale of assets, your information may
                                        be transferred to the new entity, subject to the same privacy protections.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                We implement appropriate technical and organizational measures to protect your
                                information:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Access controls and authentication measures</li>
                                <li>Regular security audits and monitoring</li>
                                <li>Secure cloud infrastructure and hosting</li>
                                <li>Employee training on data protection practices</li>
                                <li>Incident response procedures</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                            <p className="text-white/80 leading-relaxed">
                                We retain your information for as long as necessary to fulfill the purposes outlined in
                                this policy, comply with legal obligations, and resolve disputes. Project-related
                                information is typically retained for 7 years after project completion for legal and
                                business purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>
                                    <strong>Access:</strong> Request a copy of your personal information
                                </li>
                                <li>
                                    <strong>Correction:</strong> Request correction of inaccurate information
                                </li>
                                <li>
                                    <strong>Deletion:</strong> Request deletion of your information (subject to legal
                                    obligations)
                                </li>
                                <li>
                                    <strong>Portability:</strong> Request transfer of your information to another
                                    service
                                </li>
                                <li>
                                    <strong>Objection:</strong> Object to certain uses of your information
                                </li>
                                <li>
                                    <strong>Restriction:</strong> Request limitation of processing
                                </li>
                                <li>
                                    <strong>Withdraw Consent:</strong> Withdraw consent for marketing communications
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                We use cookies and similar technologies to enhance your experience:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>
                                    <strong>Essential Cookies:</strong> Required for website functionality
                                </li>
                                <li>
                                    <strong>Analytics Cookies:</strong> Help us understand usage patterns
                                </li>
                                <li>
                                    <strong>Marketing Cookies:</strong> Enable personalized advertising (with consent)
                                </li>
                                <li>
                                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                                </li>
                            </ul>
                            <p className="text-white/80 leading-relaxed mt-4">
                                You can control cookies through your browser settings, but disabling them may affect
                                website functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
                            <p className="text-white/80 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the
                                privacy practices of these external sites. We encourage you to review their privacy
                                policies before providing any personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
                            <p className="text-white/80 leading-relaxed">
                                Your information may be transferred to and processed in countries other than your
                                country of residence. We ensure appropriate safeguards are in place to protect your
                                information in accordance with applicable data protection laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
                            <p className="text-white/80 leading-relaxed">
                                Our services are not directed to individuals under 18 years of age. We do not knowingly
                                collect personal information from children. If you become aware that a child has
                                provided us with personal information, please contact us immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
                            <p className="text-white/80 leading-relaxed">
                                We may update this Privacy Policy periodically to reflect changes in our practices or
                                applicable laws. We will notify you of significant changes by posting the updated policy
                                on our website and updating the effective date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
                            <p className="text-white/80 leading-relaxed">
                                If you have questions about this Privacy Policy or wish to exercise your rights, please
                                contact us:
                            </p>
                            <div className="mt-4 p-4 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg">
                                <p className="text-white/80">
                                    Email: support@launchbit.in
                                    <br />
                                    Subject Line: "Privacy Policy Inquiry"
                                    <br />
                                    Website: https://launchbit.in
                                    <br />
                                    Response Time: Within 30 days
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
