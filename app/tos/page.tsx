import config from "@/config"
import { getSEOTags } from "@/libs/seo"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = getSEOTags({
    title: `Terms and Conditions | ${config.appName}`,
    canonicalUrlRelative: "/tos",
})

const TOS = () => {
    return (
        <main id="tos" className="text-black min-h-screen bg-grid-amber-500/10 px-10">
            <Header />
            <div className="max-w-xl mx-auto relative z-10 mb-10">
                <h1 className="text-3xl mt-10 font-extrabold pb-6 text-zinc-900">
                    Terms and Conditions for {config.appName}
                </h1>

                <pre className="leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "sans-serif" }}>
                    {`Last Updated: 2024-06-27

Welcome to ${config.appName}, the customer-facing brand name for Agroha Solutions. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions (“Terms”). Please review these Terms carefully. If you do not agree to these Terms, you should not use our website or services.

1. Introduction
${config.appName}, operated by Agroha Solutions (“Company”, “we”, “us”, or “our”), develops software products both for others and for sale under our own brand. Our services are available to customers worldwide.

2. Definitions
Services: All services provided by ${config.appName}, including but not limited to software development, consultation, and products such as Servcy, ShieldPeer, and Jotify.
User: Any person or entity using our services.
Website: The website owned and operated by ${config.appName}.

3. Acceptance of Terms
By using our website or services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services.

4. Modification of Terms
We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and your continued use of the services constitutes acceptance of the new Terms.

5. Use of Services
You agree to use the services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the services by any third party. Prohibited behavior includes but is not limited to harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.

6. Privacy Policy
Our Privacy Policy, which sets out how we will use your information, can be found at ${config.domainName}/privacy-policy. By using our website or services, you consent to the processing described therein and warrant that all data provided by you is accurate.

7. Intellectual Property
All content included on the website, unless uploaded by users, is the property of ${config.appName}, our affiliates, or other relevant third parties. In these Terms, “Content” means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code, and software and any other form of information capable of being stored in a computer that appears on or forms part of this website.

8. Customer Obligations
Customers must provide accurate information necessary for the provision of services and are responsible for maintaining the confidentiality of their account credentials. Customers must notify us immediately of any unauthorized use of their account or any other breach of security.

9. Orders and Payments
All orders placed through our website are subject to our acceptance. We reserve the right to refuse or cancel any order at our discretion. Prices for our services are subject to change without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the service.

10. Cancellation and Refund Policy
Our Cancellation and Refund Policy, which sets out the terms of cancellation and refunds, can be found at ${config.domainName}/refund-cancellation-policy.

11. Limitation of Liability
To the fullest extent permitted by law, ${config.appName}, its affiliates, and their respective directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use of the services; (b) any unauthorized access to or use of our services and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the services; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services by any third party; (e) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the services; and/or (f) the defamatory, offensive, or illegal conduct of any third party.

12. Indemnification
You agree to indemnify, defend, and hold harmless ${config.appName}, its affiliates, and their respective directors, officers, employees, and agents from and against all claims, damages, losses, liabilities, costs, and expenses (including but not limited to reasonable attorneys' fees) arising out of or related to (i) your use of the services; (ii) any breach of these Terms; (iii) any violation of applicable laws, rules, or regulations; or (iv) your content.

13. Governing Law
These Terms and your use of the services shall be governed by and construed in accordance with the laws of the jurisdiction in which Agroha Solutions is based, without regard to its conflict of law principles.

14. Dispute Resolution
Any disputes arising out of or relating to these Terms or the services shall be resolved through binding arbitration in accordance with the rules of the jurisdiction in which Agroha Solutions is based.

15. Severability
If any provision of these Terms is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.

16. Contact Information
If you have any questions about these Terms, please contact us at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                </pre>
            </div>
            <Footer />
        </main>
    )
}

export default TOS
