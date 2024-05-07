<template>
  <main class="w-full h-screen p-5 md:px-14 bg-lightBG dark:bg-lightText text-lightText dark:text-[white]">
    <section class="shadow-xl bg-lightBG dark:bg-lightText px-4 py-2 w-fit drop-shadow-2xl rounded">
      <div class="flex items-center gap-3" @click="goBack">
        <i class="fa-solid fa-arrow-left"></i> 
        <span>Back</span>
      </div>
    </section>
    <section class="mt-20 bg-lightBG dark:bg-lightText">
      <div v-if="countries">
        <div v-for="country in countries" :key="country.cca3" class="flex flex-col md:flex-row md:items-center">
          <div class="md:w-1/2">
            <img :src="`${country.flags?.svg}`" :alt="`${country.flags?.alt} Flag`" class="rounded-tr-lg rounded-tl-lg w-full h-full object-cover"/>
          </div> 
          <div class="flex flex-col   gap-8 mt-10 md:mt-0 md:w-1/2 md:pl-10">
            <div class="flex flex-col md:flex-row gap-y-8 md:space-x-20 md:space-y-12">
              <div >
                <h1 class="font-bold text-2xl mb-5">{{ country.name?.common }}</h1>
                <p><span class="font-semibold">Native name:</span> {{ country.name?.nativeName?.official }}</p>
                <p><span class="font-semibold">Population:</span> {{ country.population }}</p>
                <p><span class="font-semibold">Region:</span> {{ country.region }}</p>
                <p><span class="font-semibold">Sub-region:</span> {{ country.subregion }}</p>
                <p><span class="font-semibold">Capital:</span> {{ country.capital[0] }}</p>
              </div>
              <div>
                <p><span class="font-semibold">Top level domains:</span> {{ country.tld[0] }}</p>
                <p><span class="font-semibold">Currency(ies):</span> {{ country.currencies[0] }}</p>
                <p><span class="font-semibold">Language(s):</span> {{ country.languuages }}</p>
              </div>
            </div>
            <div>
              <p><span class="font-semibold">Borders:</span>{{ country.borders }}</p>
            </div>
          </div>
        </div>
        <!-- Add more details here as needed -->
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </section>
  </main>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const countries = ref(null);
const router = useRouter();

const props = defineProps({
  id:String
})
const goBack = () => {
  router.go(-1); // Go back to the previous page
};
// console.log(props.id);
onMounted(async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${props.id}`);
    console.log(response.data);
    countries.value = response.data;
  } catch (error) {
    console.log('Error fetching country details:', error);
  }
});


</script>