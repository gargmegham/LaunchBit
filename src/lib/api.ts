export const fetchWithNoCache = async (url: string, options = {}) => {
    return fetch(url, { ...options, cache: "no-store" })
}
