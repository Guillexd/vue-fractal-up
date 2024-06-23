import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const filters = reactive({
    name: '',
    continentCodes: []
  })

  const mustClick = ref(false)

  const setFilterName = (name) => {
    filters.name = name
  }

  const addContinent = (continent) => {
    if (!filters.continentCodes.includes(continent)) {
      filters.continentCodes.push(continent)
    }
    mustClick.value = false
  }

  const removeContinent = (continent) => {
    const index = filters.continentCodes.indexOf(continent)
    if (index !== -1) {
      filters.continentCodes.splice(index, 1)
    }
    mustClick.value = true
  }

  const emptyContinentCodes = () => {
    filters.continentCodes = []
    mustClick.value = true
  }

  return { filters, mustClick, setFilterName, addContinent, removeContinent, emptyContinentCodes }
})
