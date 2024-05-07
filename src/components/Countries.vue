<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';

const countries = ref([]);
const searchTerm = ref('');
const regionFilter = ref('');
const toggle = ref(false) 

const isShow = () => {
    toggle.value = !toggle.value
}

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    countries.value = response.data;
  } catch (error) {
    console.log('Error fetching countries:', error);
  }
};

const filterByRegion = (region) => {
  regionFilter.value = region;
};

const resetFilter = () => {
  regionFilter.value = '';
};

const filteredCountries = computed(() => {
  return countries.value.filter((country) => {
    const nameMatch = country.name.common.toLowerCase().includes(searchTerm.value.toLowerCase());
    const regionMatch = regionFilter.value ? country.region.includes(regionFilter.value) : true;
    return nameMatch && regionMatch;
  });
});

import {useRouter} from 'vue-router'

    const router = useRouter();

onMounted(() => {
  fetchCountries();
});
</script>

<template>
    <section class="flex flex-col md:flex-row gap-5 md:items-center justify-between">
        <form action="" class="">
            <div class="flex items-center shadow p-3 rounded dark:shadow-lg bg-[white] dark:bg-darkElements text-lightInput dark:text-[white]">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input  v-model="searchTerm" @input="updateSearch" type="text" placeholder="Search for a country..." class="bg-[transparent]  text-sm placeholder:text-lightInput placeholder:text-sm outline-none border-0 pl-3 w-full md:w-fit">
            </div>
        </form>
        <div class="relative">
            <div class="flex justify-between items-center px-4 py-3 rounded w-60 bg-[white] dark:bg-darkElements text-lightText dark:text-[white] text-sm cursor-pointer" @click="isShow">
                <span >Filter by Region</span>
                <i v-if="toggle" class="fa-solid fa-chevron-up"></i>
                <i v-else  class="fa-solid fa-chevron-down"></i>
                
            </div >
            <ul v-if="toggle" class="px-4 pt-3 rounded w-60 bg-[white] dark:bg-darkElements text-lightText dark:text-[white] text-sm mt-1 absolute">
                <li class="cursor-pointer pb-3" @click="resetFilter">All</li>
                <li class="cursor-pointer pb-3" @click="filterByRegion('Africa')">Africa</li>
                <li class="cursor-pointer pb-3" @click="filterByRegion('America')">America</li>
                <li class="cursor-pointer pb-3" @click="filterByRegion('Asia')">Asia</li>
                <li class="cursor-pointer pb-3" @click="filterByRegion('Europe')">Europe</li>
                <li class="cursor-pointer pb-3" @click="filterByRegion('Oceania')">Oceania</li>

            </ul>
        </div>
    </section>
    <section class="pt-5">
            <div class="text-sm grid md:grid-cols-4 gap-x-5 gap-y-8 ">
                <div v-for="country in filteredCountries" :key="country.cca3" >
                    <router-link :to="{ name: 'Country',path:'/countries/:id', params: { id: country.cca3 } }">
                      <div class="flex flex-col bg-[white] rounded-lg shadow dark:bg-darkBG text-lightText dark:text-[white] cursor-pointer">
                        <div class="h-[200px] ">
                            <img :src="`${country.flags.svg}`" :alt="`${country.flags.alt} Flag`" class="rounded-tr-lg rounded-tl-lg w-full h-full object-cover"/>
                        </div>  
                        <div class="p-5 ">
                            <p class="text-lg font-bold pb-3">{{ country.name.common }}</p>
                            <p>Population: {{ country.population }}</p>
                            <p class="py-1">Region: {{ country.region }}</p>
                            <p v-if="country.capital">Capital: {{ country.capital[0]}}</p>
                        </div>
                      </div>
                    </router-link>
                </div>
                <router-view></router-view>
            </div>
    </section>
</template>