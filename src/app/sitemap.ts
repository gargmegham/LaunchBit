export default function sitemap() {
    return [
        {
            url: `https://launchbit.in`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `https://launchbit.in/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `https://launchbit.in/blogs/sitemap.xml`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.7,
        },
    ]
}
