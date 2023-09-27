<template>
    <RouterLink :to="`/country/${country.name.common.replace(/\s/g, '%20')}`"
        class="country-card bg-element shadow-element rounded-md overflow-hidden aspect-4/5 hover:!scale-105"
        data-aos="flip-left" data-aos-once="true" data-aos-duration="300">
        <img class="country-card-flag w-full aspect-5/3 object-cover" :src="country.flags.svg"
            :alt="`Flag of ${country.name.common}`" />
        <div class="country-card-text py-6 px-6 leading-6">
            <h2 class="font-extrabold text-lg mb-2">{{ country.name.common }}</h2>
            <ul>
                <li><span class="font-semibold">Population: </span>{{ country.population.toLocaleString("en") }}</li>
                <li><span class="font-semibold">Region: </span>{{ country.region }}</li>
                <li v-if="country.capital.length > 0">
                    <span class="font-semibold">Capital: </span>
                    <span v-for="capital, idx in country.capital">{{ idx == 0 ? '' : ', ' }}{{ capital }}</span>
                </li>
            </ul>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const { country } = defineProps(['country']);
</script>