import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', () => {
  const country = reactive({
    code: ''
  })

  const setCode = (code) => {
    country.code = code
  }

  return { country, setCode }
})
