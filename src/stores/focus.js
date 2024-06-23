import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFocusStore = defineStore('focus', () => {
  const isFocused = ref(false)

  const setFocusedTrue = () => {
    isFocused.value = true
  }

  const setFocusedFalse = () => {
    isFocused.value = false
  }

  return { isFocused, setFocusedTrue, setFocusedFalse }
})
