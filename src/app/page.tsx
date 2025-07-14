import { About } from "@/components/About"
import { Hero } from "@/components/Hero"
import { Navigation } from "@/components/Navigation"
import { Services } from "@/components/Services"

export default function Home() {
    return (
        <main className="min-h-screen overflow-y-auto scroll-smooth bg-black">
            <Navigation />
            <Hero />
            <About />
            <Services />
        </main>
    )
}
