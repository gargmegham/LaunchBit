import config from "@/config"
import { getSEOTags } from "@/libs/seo"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = getSEOTags({
    title: `Privacy Policy | ${config.appName}`,
    canonicalUrlRelative: "/privacy-policy",
})

const PrivacyPolicy = () => {
    return (
        <main id="privacy-policy" className="text-black min-h-screen bg-grid-amber-500/10 px-10">
            <Header />
            <div className="max-w-xl mx-auto relative z-10 mb-10">
                <h1 className="text-3xl mt-10 font-extrabold pb-6 text-zinc-900">
                    Privacy Policy for {config.appName}
                </h1>
                <pre className="leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "sans-serif" }}>
                    {`Last Updated: 2024-06-27

At ${config.appName}, the customer-facing brand name for Agroha Solutions (“Company”, “we”, “us”, or “our”), we respect your privacy and are committed to protecting it through our compliance with this Privacy Policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website or use our services, and our practices for collecting, using, maintaining, protecting, and disclosing that information.

Clause 1: Our Principles of Data Protection
Our approach to data protection is built around three key principles:
1. Transparency: We are open, honest and transparent, and you could always contact us if you have any queries.
2. Enablement: We have efficient use of personal data to enhance productivity and growth and to have you make connections between the information you have and the insights you want.
3. Security: We adopt industry leading approaches to secure the personal data entrusted to us.

Clause 2: How we collect your data
When you visit our websites or use our services, we collect personal data. The ways we collect it can be broadly categorised into the following:
1. Information you submit in order to use our product: When you use our product, we might ask you to provide personal data to us.
2. Information you provide to us directly: When you visit or use some parts of our websites and/or services, we might ask you to provide personal data to us.
3. Information we collect automatically: We collect some information about you automatically when you visit our websites or use our product/services, like your IP address and device type. We also collect information when you navigate through our websites and services, including what pages you looked at and what links you clicked on. This information is useful for us as it helps us get a better understanding of how you're using our websites and services so that we can continue to provide the best experience possible (e.g., by personalising the content you see). Some of this information is collected using cookies and similar tracking technologies.
4. Information we get from third parties: The majority of information we collect, we collect directly from you. We don't collect personal data about you from other sources.
Where we collect personal data, we'll only process it:
-   to perform a contract with you; or
-   where we have legitimate interests to process the personal data and they're not overridden by your rights; or
-   in accordance with a legal obligation; or
-   where we have your consent.
If we don't collect your personal data, we may be unable to provide you with all our services, and some functions and features on our websites may not be available to you.
If you're someone who doesn't have a relationship with us, but believe that a ${config.appName} subscriber has entered your personal data into our websites or services, you'll need to contact that ${config.appName} subscriber for any questions you have about your personal data (including where you want to access, correct, amend, or request that the user delete, your personal data).

Clause 3: How we use your data
First and foremost, we use your personal data to operate our websites and provide you with any services you've requested, and to manage our relationship with you. We don't use your personal data for any other purposes. We only use your personal data for the following purposes:
1. To communicate with you. This may include:
    - providing you with information you've requested from us (like training or education materials) or information we are required to send to you;
    - operational communications, like changes to our websites and services, security updates, or assistance with using our websites and services;
    - marketing communications (about ${config.appName} or another product or service we think you might be interested in) in accordance with your marketing preferences;
    - asking you for feedback or to take part in any research we are conducting (which we may engage a third party to assist with).
2. To help you share information with those whom you want to share information with and to assist you in making statutory submissions.
3. To support you: This may include assisting with the resolution of technical support issues or other issues relating to the websites or services, whether by email, in-app support or otherwise.
4. To protect: So that we can detect and prevent any fraudulent or malicious activity, and make sure that everyone is using our websites and services fairly and in accordance with our terms of use.

Clause 4: We don't share your data with any third party without your consent.

Clause 5: International Data Transfers
1. When we share data, it may be transferred to, and processed in, countries other than the country you live in. These countries may have laws which are different from what you're used to. Rest assured, where we disclose personal data to a third party in another country, we put safeguards in place to ensure your personal data remains protected.
2. For individuals in the European Economic Area (EEA), this means that your data may be transferred outside of the EEA. Where your personal data is transferred outside the EEA, it will only be transferred to countries that have been identified as providing adequate protection for EEA data (like New Zealand), or to a third party where we have approved transfer mechanisms in place to protect your personal data – i.e., by entering into the European Commission's Standard Contractual Clauses, or by ensuring the entity is Privacy Shield certified (for transfers to US-based third parties). For further information, please contact us using the details set out in the “How to contact us” section below.

Clause 6: Data obtained from Google
${config.appName}'s use and transfer of information received from Google APIs to any other app will adhere to [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes) including the [Limited Use](https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes) requirements.

Clause 7: Security
Security is a priority for us when it comes to your personal data. We're committed to protecting your personal data and have appropriate technical and organisational measures in place to make sure that happens.

Clause 8: Retention
1. The length of time we keep your personal data depends on what it is and whether we have an ongoing business need to retain it (for example, to provide you with a service you've requested or to comply with applicable legal, tax or accounting requirements).
2. We'll retain your personal data for as long as we have a relationship with you and for a period of time afterwards where we have an ongoing business need to retain it, in accordance with our data retention policies and practices. Following that period, we'll make sure it's deleted or anonymised.

Clause 9: Your Rights
1. It's your personal data and you have certain rights relating to it. When it comes to marketing communications, you can ask us not to send you these at any time – just follow the unsubscribe instructions contained in the marketing communication, or send your request to ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}.
2. You also have rights to, subject to the applicable limitations on reasonableness and practicability:
    - know what personal data we hold about you, and to make sure it's correct and up to date;
    - request a copy of your personal data, or ask us to restrict processing your personal data or delete it; and
    - object to our continued processing of your personal data
3. You can exercise these rights at any time by sending an email to ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}.
4. If you're not happy with how we are processing your personal data, please let us know by sending an email to ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}. We will review and investigate your complaint, and try to get back to you within a reasonable time frame.

Clause 10: How to contact us
You could get in touch with us at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}.`}
                </pre>
            </div>
            <Footer />
        </main>
    )
}

export default PrivacyPolicy
