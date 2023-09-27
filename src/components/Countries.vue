<template>
    <div v-if="filteredCountries.length == 0">
        <p class="font-semibold my-5 text-2xl">No Result Found.</p>
    </div>
    <div v-else class="max-w-[300px] mx-auto grid gap-16 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CountryCard v-for="country in filteredCountries" :key="country.name.common" :country="country" />
    </div>
</template>

<script setup>
import CountryCard from './CountryCard.vue';
import { useCountriesStore } from '../stores/countries';
import { storeToRefs } from 'pinia';
const countriesStore = useCountriesStore();
const { filteredCountries } = storeToRefs(countriesStore);
</script>