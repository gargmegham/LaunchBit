import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"

import { getSEOTags } from "@/lib/seo"

import { Footer } from "@/components/Footer"
import { Navigation } from "@/components/Navigation"

import "@/styles/globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = getSEOTags()

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                />
                <Script id="google-script" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA4}');`}
                </Script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
