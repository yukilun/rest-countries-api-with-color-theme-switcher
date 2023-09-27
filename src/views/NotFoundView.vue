<template>
    <div class="w-[90%] max-w-7xl mx-auto text-center py-32 text-lg">
        <p class="font-semibold mb-5 text-2xl">404 Not Found</p>
        <RouterLink to="/" class="underline opacity-60 transition-all hover:opacity-100">Return Home</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'; 
</script>