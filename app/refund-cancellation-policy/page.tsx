import Link from "next/link"

import config from "@/config"
import { getSEOTags } from "@/libs/seo"

import { BoxesCore } from "@/components/BgBoxes"

export const metadata = getSEOTags({
    title: `Refund & Cancellation Policy | ${config.appName}`,
    canonicalUrlRelative: "/refund-cancellation-policy",
})

const RefundCancellationPolicy = () => {
    return (
        <main id="privacy-policy" className="bg-black text-neutral-300">
            <BoxesCore />
            <div className="max-w-xl mx-auto p-5 relative z-10">
                <div className="flex justify-end">
                    <Link
                        href="/"
                        className="flex relative bg-black border text-sm font-medium border-white/[0.2] text-white px-4 py-2 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                                clipRule="evenodd"
                            />
                        </svg>{" "}
                        <span>Home</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px" />
                    </Link>
                </div>
                <h1 className="text-3xl mt-10 font-extrabold pb-6 text-neutral-400">
                    Refund & Cancellation Policy for {config.appName}
                </h1>
                <pre className="leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "sans-serif" }}>
                    {`Last Updated: 2024-06-03

This notice applies across all websites that we own and operate and all services we provide, including our online and mobile software services products, and any other apps or services we may offer (our “services”)

Cancellation and Refund Policy:
The terms hereof shall constitute LaunchBit i.e. Agroha Solutions (“Company”) cancellation and refund policy in relation to the Solutions rendered on the Website (“Cancellation and Refund Policy”). Capitalized terms not defined herein shall have the meaning ascribed to them in the Terms of Use.

Cancellation and Refunds by the Company:
Please note that there may be certain orders that we are unable to accept and must cancel. We reserve the right, at our sole discretion, to refuse or cancel any order for any reason, without any claims or liability to pay finance charges or interest on the amount. Some situations that may result in your order being canceled include but are not limited to inaccuracies or errors in Solutions or pricing information, technical or technological problems or problems identified in relation to credit / debit fraud. We may also require additional verifications or information before accepting any order. We will contact you if all or any portion of your order is canceled or if additional information is required to accept your order. If your order is cancelled by the Company after your credit / debit card has been charged, the said amount will be refunded to that credit / debit card account.

Cancellation by you:
You agree and acknowledge that unless stated otherwise you are not entitled to cancel any orders made by you on this Website. In the event you subscribe to any Solutions, the same may be cancelled by you one month prior to the provision of the Solutions, in such a case you will be refunded in the entire amount after deducting any bank charges that may have been applicable. Further during a period between one month and 14 days from when the Solutions are to be provided, if there is a cancellation request received, we may at our discretion refund 50% of the amount, after deducting any bank charges that may have been applicable, to you. A period of 14 days before the Solutions to be provided no request for cancelation will not be entertained by the Company.

You could get in touch with us at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}.`}
                </pre>
            </div>
        </main>
    )
}

export default RefundCancellationPolicy
