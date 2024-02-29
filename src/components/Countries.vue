<script setup>
import {ref, onMounted} from 'vue';
import axios from "axios"

const countries = ref([])
const isLoading = ref(false)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    console.log('API Response:', response.data);
    countries.value = response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
    error.value = 'Failed to fetch data. Please try again later.';
  } finally {
    // Set isLoading to false once data is loaded or an error occurs
    isLoading.value = false;
  }
});

// if (isLoading) return <p className='loading'>Loading...</p>;
// if (error) return <p>error message</p>;


</script>

<template>
    <div v-if="isLoading">Loading...</div>

    <!-- Show error message if there is a network issue -->
    <div v-if="error">{{ error }}</div>
    <section class="pt-5">
            <div class="text-sm grid md:grid-cols-4 gap-x-5 gap-y-8 ">
                <div v-for="country in countries" :key="country.cca3" >
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
                </div>
            </div>
    </section>
</template>