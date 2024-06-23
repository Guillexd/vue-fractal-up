<script setup>
import FilterBar from './FilterBar.vue'
import { useFocusStore } from '@/stores/focus'
import { useFilterStore } from '@/stores/filter.js'

const focus = useFocusStore()
const filter = useFilterStore()

function capitalizeWords(input) {
  if (typeof input !== 'string') {
    return ''
  }

  let words = input.split(/\s+/)

  let capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    } else {
      return ''
    }
  })

  return capitalizedWords.join(' ')
}

const handleEnterKey = (event) => {
  if (event.key === 'Enter') {
    focus.setFocusedFalse()
  }
}

const handleInputFilter = (value) => {
  filter.setFilterName(capitalizeWords(value))
}
</script>

<template>
  <h2 class="text-2xl font-semibold text-nav-text">País</h2>
  <input @input="event => handleInputFilter(event.target.value)" type='text' placeholder="Escribe el país que desea ver"
    @click="focus.setFocusedTrue" @keydown.enter.prevent="handleEnterKey"
    class='w-full h-8 bg-transparent text-nav-text focus:outline-none focus:border-b-2 border-indigo-300 font-semibold'>
  <FilterBar v-show="focus.isFocused" />
</template>
