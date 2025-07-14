import { About } from "@/components/About"
import { Hero } from "@/components/Hero"
import { Navigation } from "@/components/Navigation"

export default function Home() {
    return (
        <main className="h-screen overflow-y-auto snap-y snap-mandatory">
            <Navigation />
            <Hero />
            <About />
        </main>
    )
}
