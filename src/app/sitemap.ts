import { MetadataRoute } from "next"

import config from "@/utils/config"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            // this is for landing page
            url: `https://${config.domainName}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
    ]
}
