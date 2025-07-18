import type { Metadata } from "next"

const TITLE = "LaunchBit - The Launchpad for Your Next Big Idea"
const DESC =
    "At LaunchBit, we empower founders to turn their ideas into reality with our comprehensive suite of services, from product development to marketing and beyond."
const NAME = "LaunchBit"
const DOMAIN = "https://launchbit.in"

export const getSEOTags = ({
    title,
    description,
    keywords,
    openGraph,
    canonicalUrlRelative,
    extraTags,
    twitter,
    article,
}: Metadata & {
    canonicalUrlRelative?: string
    extraTags?: Record<string, any>
    twitter?: {
        title?: string
        description?: string
        images?: string
    }
    article?: {
        publishedTime?: string
        modifiedTime?: string
        authors?: string[]
        tags?: string[]
    }
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
            images: openGraph?.images || `${DOMAIN}/images/blog-default.jpg`,
        },
        twitter: {
            title: twitter?.title || openGraph?.title || TITLE,
            description: twitter?.description || openGraph?.description || DESC,
            card: "summary_large_image",
            creator: "@garg_megham",
            ...(twitter?.images && { images: twitter.images }),
        },
        ...(canonicalUrlRelative && {
            alternates: { canonical: canonicalUrlRelative },
        }),
        ...(article && {
            article: {
                publishedTime: article.publishedTime,
                modifiedTime: article.modifiedTime,
                authors: article.authors,
                tags: article.tags,
            },
        }),
        ...extraTags,
    }
}

export const generateBlogListingSEO = () => {
    return getSEOTags({
        title: "Blog",
        description:
            "Latest insights on startup development, product launches, and entrepreneurship. Expert advice on MVP development, workflow automation, and scaling your business.",
        canonicalUrlRelative: "/blog",
        openGraph: {
            title: "Blog | LaunchBit",
            description: "Latest insights on startup development, product launches, and entrepreneurship.",
            type: "website",
            images: `${DOMAIN}/images/blog-listing.jpg`,
        },
    })
}

export const generateBlogSEO = ({
    title,
    description,
    slug,
    tags,
    publishedAt,
    updatedAt,
    thumbnail,
}: {
    title: string
    description: string
    slug: string
    tags: string[]
    publishedAt: string
    updatedAt?: string
    thumbnail?: string
}) => {
    const seoDescription = description.replace(/[#*`]/g, "").slice(0, 160)

    const seoTitle = title.slice(0, 60)

    return getSEOTags({
        title: seoTitle,
        description: seoDescription,
        keywords: tags,
        canonicalUrlRelative: `/blogs/${slug}`,
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            type: "article",
            images: thumbnail || `${DOMAIN}/images/blog-default.jpg`,
            publishedTime: publishedAt,
            modifiedTime: updatedAt || publishedAt,
            authors: ["Megham Garg"],
            tags: tags,
        },
        twitter: {
            title: seoTitle,
            description: seoDescription,
            images: thumbnail || `${DOMAIN}/images/blog-default.jpg`,
        },
        article: {
            publishedTime: publishedAt,
            modifiedTime: updatedAt || publishedAt,
            authors: ["Megham Garg"],
            tags: tags,
        },
    })
}
