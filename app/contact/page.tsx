import config from "@/config"
import { getSEOTags } from "@/libs/seo"

import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = getSEOTags({
    title: `${config.appName} | Contact`,
    canonicalUrlRelative: "/contact",
})

export default function ContactPage() {
    return (
        <main className="bg-grid-amber-500/10">
            <Header />
            <Contact />
            <Footer />
        </main>
    )
}
