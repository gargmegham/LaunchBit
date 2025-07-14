import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function RefundsAndCancellation() {
    return (
        <div className="min-h-screen bg-black text-white pt-16">
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
                        Refunds &{" "}
                        <span className="bg-gradient-to-t from-amber-600 via-yellow-400 to-white bg-clip-text text-transparent">
                            Cancellation
                        </span>
                    </h1>
                    <p className="text-lg text-white/70">Effective Date: January 1, 2024</p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
                            <p className="text-white/80 leading-relaxed">
                                At LaunchBit, we strive to deliver exceptional AI-powered MVP development services. This
                                policy outlines our approach to refunds and cancellations to ensure clarity and fairness
                                for all parties involved.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                2. Project Deposits and Upfront Payments
                            </h2>
                            <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6 mb-4">
                                <h3 className="text-xl font-semibold text-white mb-3">Non-Refundable Deposits</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Initial project deposits (typically 25-50% of project value) are generally
                                    non-refundable as they secure your project slot and cover initial planning,
                                    research, and setup costs.
                                </p>
                            </div>
                            <p className="text-white/80 leading-relaxed">
                                Deposits may be refundable only in cases where LaunchBit cannot fulfill the agreed-upon
                                services due to circumstances beyond the client's control.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Cancellation Policy</h2>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Client-Initiated Cancellation
                                    </h3>
                                    <ul className="list-disc list-inside text-white/80 space-y-2">
                                        <li>
                                            <strong>Before Project Start:</strong> 30 days written notice required.
                                            Deposit may be partially refundable (minus setup costs).
                                        </li>
                                        <li>
                                            <strong>During Active Development:</strong> Client pays for all completed
                                            work, work in progress, and any committed resources.
                                        </li>
                                        <li>
                                            <strong>After Milestone Completion:</strong> Payment for completed
                                            milestones is due regardless of cancellation.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        LaunchBit-Initiated Cancellation
                                    </h3>
                                    <ul className="list-disc list-inside text-white/80 space-y-2">
                                        <li>
                                            We may cancel projects due to scope changes exceeding 50% of original
                                            agreement
                                        </li>
                                        <li>Non-payment or breach of contract by client</li>
                                        <li>
                                            Client requests that violate our ethical guidelines or legal requirements
                                        </li>
                                        <li>
                                            In such cases, clients receive deliverables for work completed and paid for
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Refund Eligibility</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Refunds may be considered in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>
                                    Significant service failures that cannot be remedied within reasonable timeframes
                                </li>
                                <li>
                                    Deliverables that materially deviate from agreed specifications (after good faith
                                    attempts to resolve)
                                </li>
                                <li>LaunchBit's inability to deliver services due to internal issues</li>
                                <li>Mutual agreement to terminate the project</li>
                                <li>Legal or regulatory changes that make project completion impossible</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Refund Process</h2>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">How to Request a Refund</h3>
                                    <ol className="list-decimal list-inside text-white/80 space-y-2">
                                        <li>Submit a written refund request to hello@launchbit.in</li>
                                        <li>
                                            Include project details, reason for refund, and supporting documentation
                                        </li>
                                        <li>Allow 5-10 business days for initial review</li>
                                        <li>Participate in good faith discussions to resolve issues</li>
                                        <li>Refunds, if approved, will be processed within 30 days</li>
                                    </ol>
                                </div>

                                <p className="text-white/80 leading-relaxed">
                                    Refund amounts will be calculated based on work completed, resources committed, and
                                    the specific circumstances of the request.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Non-Refundable Services</h2>
                            <p className="text-white/80 leading-relaxed mb-4">
                                The following services are generally non-refundable:
                            </p>
                            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                                <li>Consultation and strategy sessions</li>
                                <li>Discovery and planning phases</li>
                                <li>Third-party software licenses and services procured for the project</li>
                                <li>Completed deliverables and milestones</li>
                                <li>Rush or expedited service fees</li>
                                <li>Travel expenses and other reimbursable costs</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Scope Changes and Additional Work</h2>
                            <p className="text-white/80 leading-relaxed">
                                Changes to project scope require written approval and may affect timelines and costs.
                                Additional work beyond the original scope is subject to separate agreements and payment
                                terms. Such additional work is non-refundable once completed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Force Majeure</h2>
                            <p className="text-white/80 leading-relaxed">
                                Neither party is liable for delays or cancellations due to circumstances beyond
                                reasonable control, including but not limited to natural disasters, government actions,
                                or global pandemics. In such cases, refunds will be handled on a case-by-case basis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Dispute Resolution</h2>
                            <p className="text-white/80 leading-relaxed">
                                We encourage open communication to resolve any concerns. If a refund dispute cannot be
                                resolved directly, it may be subject to binding arbitration as outlined in our Terms of
                                Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                            <p className="text-white/80 leading-relaxed">
                                For questions about refunds, cancellations, or to request a refund, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg">
                                <p className="text-white/80">
                                    Email: hi@launchbit.in
                                    <br />
                                    Subject Line: "Refund Request - [Project Name]"
                                    <br />
                                    Website: https://launchbit.in
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Policy Updates</h2>
                            <p className="text-white/80 leading-relaxed">
                                This policy may be updated periodically. Changes will be posted on our website and apply
                                to new projects. Existing projects remain subject to the policy version in effect at the
                                time of project commencement.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
