<script setup>
import NavBar from './NavBar.vue'

//props
const props = defineProps({
  navOpen: {
    type: Boolean,
    required: true
  }
})

//events
const emit = defineEmits(['onClickCloseNav'])
</script>

<template>
  <div :class="navOpen ? 'block' : 'hidden'" @click="emit('onClickCloseNav')"
    class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 xl:hidden"></div>

  <div :class="navOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" @click="emit('onClickCloseNav')"
    class="fixed inset-y-0 left-0 z-30 w-[17rem] md:w-[19rem] h-full overflow-y-auto transition duration-300 transform bg-navbar xl:translate-x-0 xl:static xl:inset-0">
    <NavBar />
  </div>
</template>
