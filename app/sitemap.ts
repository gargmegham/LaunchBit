import { MetadataRoute } from "next"

import config from "@/config"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            // this is for landing page
            url: `https://${config.domainName}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `https://${config.domainName}/tos`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `https://${config.domainName}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ]
}
