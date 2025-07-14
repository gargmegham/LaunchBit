import { About } from "@/components/About"
import { Hero } from "@/components/Hero"
import { Navigation } from "@/components/Navigation"
import { Reviews } from "@/components/Reviews"
import { Services } from "@/components/Services"
import { Work } from "@/components/Work"

export default function Home() {
    return (
        <main className="min-h-screen overflow-y-auto scroll-smooth bg-black">
            <Navigation />
            <Hero />
            <About />
            <Services />
            <Work />
            <Reviews />
        </main>
    )
}
