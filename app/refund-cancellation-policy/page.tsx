import config from "@/config"
import { getSEOTags } from "@/libs/seo"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = getSEOTags({
    title: `Refund & Cancellation Policy | ${config.appName}`,
    canonicalUrlRelative: "/refund-cancellation-policy",
})

const RefundCancellationPolicy = () => {
    return (
        <main id="privacy-policy" className="text-black min-h-screen bg-grid-amber-500/10 px-10">
            <Header />
            <div className="max-w-xl mx-auto relative z-10 mb-10">
                <h1 className="text-3xl mt-10 font-extrabold pb-6 text-zinc-900">
                    Refund & Cancellation Policy for {config.appName}
                </h1>
                <pre className="leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "sans-serif" }}>
                    {`Last Updated: 2024-06-27

The terms hereof shall constitute the cancellation and refund policy of ${config.appName}, the customer-facing brand name for Agroha Solutions (“Company”), in relation to the services rendered on our website and any other apps or services we may offer (“Cancellation and Refund Policy”). Capitalized terms not defined herein shall have the meaning ascribed to them in the Terms of Use.

Cancellation and Refunds by the Company:
Please note that there may be certain projects or orders that we are unable to accept and must cancel. We reserve the right, at our sole discretion, to refuse or cancel any project or order for any reason, without any claims or liability to pay finance charges or interest on the amount. Some situations that may result in your order being canceled include, but are not limited to, inaccuracies or errors in project specifications, pricing information, technical or technological problems, or issues identified in relation to credit/debit fraud. We may also require additional verifications or information before accepting any project or order. We will contact you if all or any portion of your project or order is canceled or if additional information is required to accept your order. If your project or order is canceled by the Company after your credit/debit card has been charged, the said amount will be refunded to that credit/debit card account.

Cancellation by You:
You agree and acknowledge that unless stated otherwise, you are not entitled to cancel any projects or orders made by you on our website. In the event you subscribe to any services, the same may be canceled by you one month prior to the commencement of the services, in which case you will be refunded the entire amount after deducting any bank charges that may have been applicable. Further, during a period between one month and 14 days before the services are to be provided, if a cancellation request is received, we may, at our discretion, refund 50% of the amount after deducting any bank charges that may have been applicable. A period of 14 days before the services are to be provided, no request for cancellation will be entertained by the Company.

Contact Information:
If you have any questions or concerns about our Cancellation and Refund Policy, please contact us at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                </pre>
            </div>
            <Footer />
        </main>
    )
}

export default RefundCancellationPolicy
