<script setup>
import { ref } from 'vue'
import SearchFilter from './SearchFilter.vue';
import Countries from './Countries.vue';
</script>

<template>
    <main class=" w-full h-full p-5 md:px-14 bg-lightBG dark:bg-lightText">
        <SearchFilter/>
        <Countries/>
    </main>
</template>

<style scoped>
</style>
