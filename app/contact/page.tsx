import { getSEOTags } from "@/libs/seo"

import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = getSEOTags({
    title: "LaunchBit | Contact",
    canonicalUrlRelative: "/contact",
})

export default function ContactPage() {
    return (
        <>
            <Header />
            <Contact />
            <Footer />
        </>
    )
}