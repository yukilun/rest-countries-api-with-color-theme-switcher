<template>
    <div class="w-[90%] mx-auto text-center py-16 text-lg">
        <p class="font-semibold mb-5 text-2xl">Unable to fetch REST Countries API.</p>
        <button type="button" class="underline opacity-60 transition-all hover:opacity-100"
            @click="() => countriesStore.fetchAllCountries()">
            Try again
        </button>
    </div>
</template>

<script setup>
import { useCountriesStore } from '../stores/countries';
const countriesStore = useCountriesStore();
</script>