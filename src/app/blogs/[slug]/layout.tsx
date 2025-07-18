import type { Metadata, ResolvingMetadata } from "next"

import { generateBlogSEO } from "@/lib/seo"
import { getSupabaseServiceClient } from "@/lib/supabase"

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = params
    try {
        const supabase = getSupabaseServiceClient()
        const { data: blog, error } = await supabase.from("Blog").select("*").eq("slug", slug).single()
        if (error || !blog) {
            throw new Error("Blog post not found")
        }
        const { title, description, tags = [], created_at, updated_at, thumbnail } = blog
        return generateBlogSEO({
            title,
            description: description || `Read ${title} on LaunchBit`,
            slug,
            tags: Array.isArray(tags) ? tags : [],
            publishedAt: created_at,
            updatedAt: updated_at,
            thumbnail,
        })
    } catch (error) {
        // Fallback metadata
        const defaultTitle = "Blog Post"
        const defaultDescription = `Read the latest insights on software development, freelancing, and entrepreneurship from Megham Garg.`
        return generateBlogSEO({
            title: defaultTitle,
            description: defaultDescription,
            slug,
            tags: ["AI & Automation", "Full Stack Development", "Scalable Infrastructure"],
            publishedAt: new Date().toISOString(),
        })
    }
}

export default function BlogPostLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return children
}
