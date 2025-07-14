import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { FAQs } from "@/components/FAQs"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Reviews } from "@/components/Reviews"
import { Services } from "@/components/Services"
import { Work } from "@/components/Work"

export default function Home() {
    return (
        <main className="min-h-screen overflow-y-auto scroll-smooth bg-black">
            <Hero />
            <About />
            <Services />
            <Work />
            <Reviews />
            <FAQs />
            <Contact />
            <Footer />
        </main>
    )
}
