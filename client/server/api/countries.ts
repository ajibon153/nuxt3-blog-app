export default defineEventHandler(async (event) => {
    // Fetch countries from external API
    try {
        const config = useRuntimeConfig()
        const countryData = await $fetch(config.public.API_URL + "/countries", {
            query: {
                country_secret_key: config.privateKey
            }
        })

        return { countryData }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch countries'
        })
    }
    // const countries = await res.json()
    // return countries
})

// useFetch vs fetch in Nuxt 3 server API routes:
// 1. useFetch is primarily designed for use in Vue components and composables within the Nuxt 3 framework. It provides features like automatic reactivity, caching, and SSR support, making it ideal for client-side data fetching in a Nuxt application.
// In contrast, fetch is a standard web API for making HTTP requests and is more suitable for server-side operations, such as within Nuxt 3 server API routes. It offers greater flexibility and control over the request and response handling without the additional features provided by useFetch.
