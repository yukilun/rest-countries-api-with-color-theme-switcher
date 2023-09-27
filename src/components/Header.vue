<template>
    <header class="bg-element shadow-element py-6">
        <div class="w-[90%] mx-auto flex justify-between items-center">
            <RouterLink to="/" class="transition-all duration-300 hover:scale-105">
                <h1 class="font-extrabold text-lg md:text-2xl">Where in the world?</h1>
            </RouterLink>
            <DarkModeToggle />
        </div>
    </header>
</template>

<script setup>
import DarkModeToggle from './DarkModeToggle.vue';
import { RouterLink } from 'vue-router';

</script>