import { getAllBlogs } from "@/lib/blogs"

export default async function sitemap() {
    try {
        const blogs = getAllBlogs()

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
