<script setup>
import { useFilterStore } from '@/stores/filter.js'
import { computed, ref } from 'vue'

const props = defineProps({
  continent: {
    type: Object,
    required: true
  }
})

const filter = useFilterStore()
const toogle = ref(true)

const isContinentSelected = computed(() => {
  return filter.filters.continentCodes.includes(props.continent?.code);
})

const toogleFunctionToContinents = (continent) => {
  if (toogle.value || filter.mustClick) {
    filter.addContinent(continent)
  } else {
    filter.removeContinent(continent)
  }
  toogle.value = !toogle.value
}
</script>

<template>
  <div>
    <figure class="relative" @click="toogleFunctionToContinents(continent?.code)">
      <img :class="{ 'shadow-[0_0_5px_4px_rgba(99,102,241,1)]': isContinentSelected }"
        class="h-36 w-48 object-cover rounded-xl cursor-pointer hover:shadow-[0_0_5px_4px_rgba(99,102,241,1)]"
        :src="continent?.img" :alt="continent?.name">
    </figure>
    <p class="text-lg text-nav-text font-bold">{{ continent?.name }}</p>
  </div>
</template>
