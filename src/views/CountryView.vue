<template>
  <main class="w-[85%] max-w-[1300px] mx-auto py-12 text-sm md:w-[90%]">
        <BackButton />
        <CountryDetails />
  </main>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCountriesStore } from '../stores/countries';
import BackButton from '../components/BackButton.vue';
import CountryDetails from '../components/CountryDetails.vue';

const countriesStore = useCountriesStore();
const route = useRoute();
const router = useRouter();

watch(() => route.params.countryName, (countryName) => {
    if(!countryName) return;
    countriesStore.updateCountryName(countryName);
    if(!countriesStore.country) router.push('/404');
}, {immediate: true});

</script>