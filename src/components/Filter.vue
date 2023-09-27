<template>
    <div class="filter flex justify-between flex-wrap gap-5 mb-10">
        <label class="filter-search bg-element shadow-element rounded-md w-fit max-w-full px-4 py-3 flex gap-3">
            <svg class="filter-search-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input class="filter-search bg-element w-80 flex-grow border-none outline-none" type="text" placeholder="Search for a country..."
                v-model="filterSearch">
            <button v-if="filterSearch !== ''" type="button" class="opacity-50 hover:opacity-100" @click="() => countriesStore.updateFilterSearch('')">
                <svg class="filter-search-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
        </label>
        <div class="filter-region relative">
            <button class="filter-region-btn bg-element shadow-element rounded-md w-52 px-4 py-3 flex gap-3 justify-between" type="button" @click="collapseFilterRegion">
                <span>{{filterRegion == 'All' ? 'Filter By Region' : filterRegion}}</span>
                <svg v-if="isCollapsed" class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-360 280-560h400L480-360Z"/>
                </svg>
                <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="m280-400 200-200 200 200H280Z"/>
                </svg>
            </button>
            <div class="bg-element shadow-element rounded-md absolute w-full top-full left-0 translate-y-2 h-0 px-2 z-50 overflow-hidden transition-all" 
            :class="!isCollapsed && 'py-2 h-auto'">
                <button v-for="region in regions" class="w-full text-left px-4 py-2 hover:opacity-60" :class="region == filterRegion && 'hidden'" type="button"
                    @click="() => countriesStore.updateFilterRegion(region)">
                    {{ region }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCountriesStore } from '../stores/countries';
import { storeToRefs } from 'pinia';

const countriesStore = useCountriesStore();
const { filterSearch, filterRegion, regions } = storeToRefs(countriesStore); 

const isCollapsed = ref(true);
function collapseFilterRegion() {
    isCollapsed.value = !isCollapsed.value;
}
</script>