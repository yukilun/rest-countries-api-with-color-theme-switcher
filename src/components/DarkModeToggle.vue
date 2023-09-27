<template>
    <label class="dark-mode-toggle flex gap-2 items-center cursor-pointer font-semibold text-sm md:text-lg transition-all duration-300 hover:scale-105">
        <input class="hidden" type="checkbox" id="dark-mode-btn" v-model="isDarkMode">
        <svg v-if="isDarkMode" class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
        </svg>
        <svg v-else class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
        </svg>
        <span>Dark Mode</span>
    </label>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
const isDarkMode = ref(null);

function getIsDarkMode() {
    const preferDarkMode = localStorage.getItem('prefer-dark-mode');
    if(preferDarkMode !== null) {
        isDarkMode.value =  preferDarkMode == 'true';
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDarkMode.value = true;
    }
}

getIsDarkMode();

watch(isDarkMode, (isDark) => {
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('prefer-dark-mode', 'true');
    }
    else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('prefer-dark-mode', 'false');
    }
}, {immediate: true});
</script>