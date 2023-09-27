<template>
    <div class="country-details grid md:grid-cols-2 gap-14">
        <div class="flex justify-start items-center">
            <img class="country-details-flag w-full max-w-[560px] aspect-7/5 shadow-element object-cover"
                :src="country.flags.svg" :alt="`flag of ${country.name.common}`" :key="country.name.common" 
                data-aos="flip-down" data-aos-once="true" data-aos-duration="500"/>
        </div>
        <div class="country-details-text flex flex-col justify-center leading-6">
            <h1 class="text-2xl md:text-3xl font-extrabold mb-6">{{ country.name.common }}</h1>
            <div class="grid lg:grid-cols-2 mb-12 gap-4">
                <ul class="country-details-text-col-1 leading-8">
                    <li>
                        <span class="font-semibold">Native Name: </span>
                        <span v-for="nativeName, idx in Object.values(country.name.nativeName)">{{ idx == 0 ? '' : ', ' }}{{
                            nativeName.common }}</span>
                    </li>
                    <li><span class="font-semibold">Population: </span>{{ country.population.toLocaleString("en") }}</li>
                    <li><span class="font-semibold">Region: </span>{{ country.region }}</li>
                    <li v-if="country.subregion"><span class="font-semibold">Sub Region: </span>{{ country.subregion }}</li>
                    <li v-if="country.capital.length > 0">
                        <span class="font-semibold">Capital: </span>
                        <span v-for="capital, idx in country.capital">{{ idx == 0 ? '' : ', ' }}{{ capital }}</span>
                    </li>
                </ul>
                <ul class="country-details-text-col-2 leading-8">
                    <li v-if="country.tld?.length > 0">
                        <span class="font-semibold">Top-Level Domain: </span>
                        <span v-for="tld, idx in country.tld">{{ idx == 0 ? '' : ', ' }}{{ tld }}</span>
                    </li>
                    <li v-if="country.currencies && Object.keys(country.currencies).length > 0">
                        <span class="font-semibold">Currencies: </span>
                        <span v-for="currency, idx in Object.values(country.currencies)">{{ idx == 0 ? '' : ', ' }}{{
                            currency.name }}</span>
                    </li>
                    <li v-if="country.languages && Object.keys(country.languages).length > 0">
                        <span class="font-semibold">Languages: </span>
                        <span v-for="lang, idx in Object.values(country.languages)">{{ idx == 0 ? '' : ', ' }}{{ lang
                        }}</span>
                    </li>
                </ul>
            </div>
            <div v-if="country.borders.length > 0"
                class="country-details-text-border-countries flex flex-col lg:flex-row gap-4">
                <p class="font-semibold whitespace-nowrap text-lg">Border Countries: </p>
                <div class="flex-grow flex gap-3 flex-wrap">
                    <RouterLink v-for="countryCode in country.borders" :key="countryCode"
                        :to="`/country/${getCountry(countryCode).name.common}`"
                        class="bg-element shadow-element px-5 py-1 rounded-sm transition-all duration-300 hover:scale-105">
                        {{ getCountry(countryCode).name.common }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCountriesStore } from '../stores/countries';
const countriesStore = useCountriesStore();
const { country, allCountries } = storeToRefs(countriesStore);

function getCountry(countryCode) {
    return allCountries.value.find(country => country.cca3 == countryCode);
}
</script>
