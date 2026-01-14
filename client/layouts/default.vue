<template>
    <div class="">
        <div style="">
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog/contact">Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/admin/articles">Articles</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/auth/register">Register</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/auth/login">Login</NuxtLink>
                </li>
            </ul>
        </div>
        <br />
        <br />
        <br />
        <div>
            <NuxtPage></NuxtPage> 
        </div>
        <div style="background-color: gainsboro;">
            <h1>Home - Footer</h1>
        </div>
    </div>
</template>
