<script setup>
import FilterDetail from './FilterDetail.vue'
import { useFilterStore } from '@/stores/filter.js'
import { continents } from './continents.js'

const filter = useFilterStore()
</script>

<template>
  <div class="absolute top-28 bg-white w-9/12 p-5 rounded-3xl z-10 shadow-[3px_-3px_8px_4px_rgba(0,0,0,0.3)]">
    <section class="flex justify-between">
      <span class="text-xl text-nav-text font-bold">Filtrar por continentes</span>
      <span class="text-xl text-indigo-400 font-bold cursor-pointer"
        @click="filter.emptyContinentCodes()">Limpiar</span>
    </section>
    <section class="flex flex-wrap justify-center 2xl:justify-start mt-5 pt-1 ps-1 gap-5 overflow-y-auto max-h-96">
      <FilterDetail v-for="continent in continents" :key="continent.id" :continent="continent" />
    </section>
  </div>
</template>