<script setup>
// https://nuxt.com/docs/api/composables/define-page-meta
definePageMeta({
    layout: "auth"
})
</script>

<template>
    <div class="bg-slate-200 flex items-center justify-center">
        <h1 class="text-3xl font-bold">Login Page</h1>
        <NuxtLink href="/auth/register" class="ml-4 text-blue-500 underline">Go to Register</NuxtLink>
        <NuxtLink href="/admin/dashboard" class="ml-4 text-blue-500 underline">Dashboard</NuxtLink>
    </div>
</template>
