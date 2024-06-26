import { Viewport } from "next"
import Link from "next/link"
import Script from "next/script"

import { ReactNode } from "react"

import config from "@/config"
import { getSEOTags } from "@/libs/seo"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import ClientLayout from "@/components/LayoutClient"

import "./globals.css"

export const viewport: Viewport = {
    // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
    themeColor: config.colors.main,
    width: "device-width",
    initialScale: 1,
}

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags()

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" data-theme={config.colors.theme} className="">
            <body>
                <Link rel="preconnect" href="https://fonts.gstatic.com" />
                <Script type="text/javascript" id="clarity-microsoft">
                    {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY}");`}
                </Script>
                {/* Google Analytics */}
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA ?? ""} />
                <Analytics />
                {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}
