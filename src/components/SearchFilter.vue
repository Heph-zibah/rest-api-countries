<script setup>
import {ref} from "vue"


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
                <input type="text" placeholder="Search for a country..." class="bg-[transparent]  text-sm placeholder:text-lightInput placeholder:text-sm outline-none border-0 pl-3 w-full md:w-fit">
            </div>
        </form>
        <div class="relative">
            <div class="flex justify-between items-center px-4 py-3 rounded w-60 bg-[white] dark:bg-darkElements text-lightText dark:text-[white] text-sm cursor-pointer" @click="isShow">
                <span >Filter by Region</span>
                <i v-if="toggle" class="fa-solid fa-chevron-up"></i>
                <i v-else  class="fa-solid fa-chevron-down"></i>
                
            </div >
            <div v-if="toggle" class="px-4 pt-3 rounded w-60 bg-[white] dark:bg-darkElements text-lightText dark:text-[white] text-sm mt-1 absolute">
                <p class="cursor-pointer pb-3">Nigeria</p>
                <p class="cursor-pointer pb-3">Nigeria</p><p class="cursor-pointer pb-3">Nigeria</p><p class="cursor-pointer pb-3">Nigeria</p><p class="cursor-pointer pb-3">Nigeria</p><p class="cursor-pointer pb-3">Nigeria</p>

            </div>
        </div>
    </section>
</template>