import { Inter } from "next/font/google"
import Link from "next/link"

import config from "@/utils/config"

import "@/css/globals.css"

import Script from "next/script"

import { GoogleAnalytics } from "@next/third-parties/google"
import NextTopLoader from "nextjs-toploader"

import { getSEOTags } from "@/utils/seo"

const inter = Inter({ subsets: ["latin"] })

export const metadata = getSEOTags()

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="dark" lang="en">
            <body className={inter.className}>
                <Link rel="preconnect" href="https://fonts.gstatic.com" />
                <>
                    {/* Show a progress bar at the top when navigating between pages */}
                    <NextTopLoader color={config.colors.primary} showSpinner={false} />
                    {children}
                    {/* Clarity for recording user interactions */}
                    <Script type="text/javascript" id="clarity-microsoft">
                        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY}");`}
                    </Script>
                    {/* Google Analytics */}
                    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA ?? ""} />
                </>
            </body>
        </html>
    )
}
