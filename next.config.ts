const nextConfig = {
    images: {
        domains: ["aceternity.com", "images.unsplash.com", "kuycdtiafxwvspnedqmr.supabase.co"],
    },
    reactStrictMode: true,
    webpack: (config: any, options: any) => {
        config.module.rules.push({
            test: /\.(glsl|woff2|glb)/,
            loader: "raw-loader",
        })
        return config
    },
}

export default nextConfig
