<script setup>
import { ref, onMounted, computed } from 'vue';

const searchTerm = ref('');
const regionFilter = ref('');

const filterByRegion = (region) => {
  regionFilter.value = region;
  emit('updateRegionFilter', regionFilter.value);
};

const resetFilter = () => {
  regionFilter.value = '';
  emit('updateRegionFilter', regionFilter.value);
};

const updateSearch = () => {
  emit('updateSearch', searchTerm.value);
};

const toggle = ref(false) 

const isShow = () => {
    toggle.value = !toggle.value
}
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
</template>