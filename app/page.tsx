import CTA2 from "@/components/CTA2"
import Experience from "@/components/Experience"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import LogoCloud from "@/components/LogoCloud"
import Services from "@/components/Services"
import TestimonialsParallax from "@/components/Testimonials5"

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <LogoCloud />
            <Experience />
            <TestimonialsParallax />
            <Services />
            <CTA2 />
            <FAQ />
            <Footer />
        </>
    )
}
