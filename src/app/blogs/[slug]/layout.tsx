import type { Metadata } from "next"

import { generateBlogSEO } from "@/lib/seo"
import { getSupabaseServiceClient } from "@/lib/supabase"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const supabase = getSupabaseServiceClient()
        const { data: blog, error } = await supabase.from("Blog").select("*").eq("slug", params.slug).single()
        if (error || !blog) {
            throw new Error("Blog post not found")
        }
        const { title, description, tags = [], created_at, updated_at, thumbnail } = blog
        return generateBlogSEO({
            title,
            description: description || `Read ${title} on LaunchBit`,
            slug: params.slug,
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
            slug: params.slug,
            tags: ["AI & Automation", "Full Stack Development", "Scalable Infrastructure"],
            publishedAt: new Date().toISOString(),
        })
    }
}

export default function BlogPostLayout({ children }: { children: any }) {
    return children
}
