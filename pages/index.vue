<script setup>
// https://nuxt.com/docs/api/composables/define-page-meta
definePageMeta({
    layout: "default"
})
const articles = [1, 2, 3, 4, 5];
</script>


<template>
    <div class="">
        <div>
            <h1>List Articles</h1>
        </div>
        
        <div v-for="(article, index) in articles" :key="index">
            <h2>Article - {{ article }}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic alias voluptatibus vel perferendis suscipit repellat mollitia et impedit? Voluptatibus adipisci dolore culpa quidem molestiae veritatis consequuntur rem odit possimus?</p>
        </div>
    </div>
</template>
