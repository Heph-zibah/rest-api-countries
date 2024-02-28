<script setup>
import {useDark, useToggle} from '@vueuse/core'
const isDark = useDark();
const isToggle = useToggle(isDark);

</script>

<template>
    <header class="p-5 md:px-14 bg-[white] dark:bg-darkBG">
       <div class="flex items-center justify-between">
        <h1 class="font-black text-lightText dark:text-[white]">Where in the world?</h1>
        <p @click="isToggle()" class="cursor-pointer text-lightText dark:text-[white] font-semibold text-sm hover:drop-shadow-sm hover:shadow-lightInput"><i class="fa-regular fa-moon pr-1"></i> {{isDark ? "Dark" : "Light"}} mode</p>
       </div>
    </header>
</template>