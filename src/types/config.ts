export interface ConfigProps {
    appName: string
    appDescription: string
    domainName: string
    socials: {
        twitter?: string
        linkedin?: string
        facebook?: string
        instagram?: string
        youtube?: string
        github?: string
        telegram?: string
    }
    colors: {
        primary: string
        secondary: string
        tertiary: string
    }
    keywords: string
}