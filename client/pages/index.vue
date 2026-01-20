<script setup>
// https://nuxt.com/docs/api/composables/define-page-meta
definePageMeta({
    layout: "default"
})
const config = useRuntimeConfig()

const { data: serverData } = await useFetch(`/api/key`) // Fetching from our own server API

const { data: posts } = await useFetch(config.public.API_BASE_URL + `/api/posts`) // Fetching from external API
async function fetchCountries() {
    const { data: countryData, error } = await useFetch("/api/countries")
    console.log("countryData useFetch:", countryData?.value)
    console.log("error", error.value)
}
function onChange(e) {
    console.log(e?.target?.value)
}
</script>

<template>
    <div class="index">
        <button @click="fetchCountries">get countries</button>
        <br />
        <div>
            <h1>List Articles</h1>
        </div>
        <!-- if posts exist -->
        <div v-if="posts?.data">
            <div v-for="article in posts?.data" :key="article?.id" class="mb-8">
                <h2>
                    Article -
                    <a href="">{{ article?.title }}</a>
                </h2>
                <div v-html="article?.post_content"></div>
            </div>
        </div>
        <input type="text" @input="onChange" />
    </div>
</template>
