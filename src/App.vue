<template>
  <Header />
  <FetchError v-if="countriesStore.error" />
  <RouterView v-if="countriesStore.allCountries.length > 0" />
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import FetchError from './components/FetchError.vue';
import { useCountriesStore } from './stores/countries';
import AOS from 'aos';

const countriesStore = useCountriesStore();
countriesStore.fetchAllCountries();

onMounted(() => {
  AOS.init();
})
</script>

<style scoped>

</style>
