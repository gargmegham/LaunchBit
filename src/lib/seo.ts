import type { Metadata } from "next"

const TITLE = "LaunchBit - The Launchpad for Your Next Big Idea"
const DESC =
    "At LaunchBit, we empower founders to turn their ideas into reality with our comprehensive suite of services, from product development to marketing and beyond."
const NAME = "LaunchBit"
const DOMAIN = "https://launchbit.in/"

export const getSEOTags = ({
    title,
    description,
    keywords,
    openGraph,
    canonicalUrlRelative,
    extraTags,
}: Metadata & {
    canonicalUrlRelative?: string
    extraTags?: Record<string, any>
} = {}) => {
    return {
        title: title || TITLE,
        description: description || DESC,
        keywords: keywords || [
            "MVP development",
            "Workflow automation",
            "LLM Driven Applications",
            "API Integration",
            "Architecture Design",
            "Scalability Solutions",
            "Product Development",
            "DevOps",
            "Digital Marketing",
        ],
        applicationName: NAME,
        metadataBase: new URL(process.env.NODE_ENV === "development" ? "http://localhost:3000/" : DOMAIN),
        openGraph: {
            title: openGraph?.title || TITLE,
            description: openGraph?.description || DESC,
            url: openGraph?.url || DOMAIN,
            siteName: NAME,
            locale: "en_US",
            type: "website",
        },
        twitter: {
            title: openGraph?.title || TITLE,
            description: openGraph?.description || DESC,
            card: "summary_large_image",
            creator: "@garg_megham",
        },
        ...(canonicalUrlRelative && {
            alternates: { canonical: canonicalUrlRelative },
        }),
        ...extraTags,
    }
}
