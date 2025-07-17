import { generateBlogListingSEO } from "@/lib/seo"

export const metadata = generateBlogListingSEO()

export default function BlogListingLayout({ children }) {
    return children
}
