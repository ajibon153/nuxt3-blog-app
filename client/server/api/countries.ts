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
