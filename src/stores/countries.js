import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useCountriesStore = defineStore("countries", () => {
  const allCountries = ref([]);
  const filterSearch = ref("");
  const filterRegion = ref("All");
  const countryName = ref("");
  const country = ref(null);
  const error = ref('error');

  const filteredCountries = computed(() => {
    return allCountries.value.filter((country) => {
      let isMatch = true;
      if (filterRegion.value !== "All") {
        isMatch = isMatch && country.region === filterRegion.value;
      }
      if (filterSearch.value) {
        isMatch = isMatch && country.name.common.toLowerCase().startsWith(filterSearch.value.toLowerCase());
      }
      return isMatch;
    });
  });

  const regions = computed(()=> ['All',...Array.from(new Set(allCountries.value.map((country)=>country.region)))]);

  function fetchAllCountries() {
    error.value = null;
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3")
      .then((res) => res.json())
      .then((data) => allCountries.value = data)
      .catch((err) => error.value = err);
  }

  function updateFilterSearch(search) {
    filterSearch.value = search;
  }

  function updateFilterRegion(region) {
    filterRegion.value = region;
  }

  function updateCountryName(newCountryName) {
    countryName.value = newCountryName;
    country.value = allCountries.value.find((country => country.name.common == countryName.value));
  }

  return { allCountries, filteredCountries, filterSearch, filterRegion, countryName, country, regions, error, fetchAllCountries, updateFilterSearch, updateFilterRegion, updateCountryName};
});
