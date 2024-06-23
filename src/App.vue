<script setup>
import { RouterView } from 'vue-router'
import ButtonNavBar from './components/NavBar/ButtonNavBar.vue'
import RouterNavBar from './components/NavBar/RouterNavBar.vue'
import { ref } from 'vue'
import { useFocusStore } from './stores/focus';

const isNavOpen = ref(false)
const focus = useFocusStore()
</script>

<template>
  <div class="flex h-screen" @click="focus.setFocusedFalse">
    <header>
      <RouterNavBar :navOpen="isNavOpen" @onClickCloseNav="isNavOpen = false" />
    </header>

    <main class="py-10 px-0 sm:px-10 bg-page-color w-full overflow-hidden min-h-screen">
      <section class="absolute top-5 left-5">
        <ButtonNavBar @onClickOpenNav="isNavOpen = true" />
      </section>
      <RouterView />
    </main>
  </div>
</template>
