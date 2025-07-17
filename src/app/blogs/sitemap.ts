import { getSupabaseServiceClient } from "@/lib/supabase"

export default async function sitemap() {
    try {
        const supabase = getSupabaseServiceClient()

        const { data: blogs, error } = await supabase
            .from("Blog")
            .select("slug, created_at, updated_at")
            .order("created_at", { ascending: false })

        if (error) {
            console.error("Error fetching blogs for sitemap:", error)
            return []
        }

        return blogs.map((blog) => ({
            url: `https://launchbit.in/blogs/${blog.slug}`,
            lastModified: new Date(blog.updated_at || blog.created_at),
            changeFrequency: "monthly",
            priority: 0.6,
        }))
    } catch (error) {
        console.error("Error generating blog sitemap:", error)
        return []
    }
}
