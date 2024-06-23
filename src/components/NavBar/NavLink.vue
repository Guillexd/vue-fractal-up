<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

//props
const props = defineProps({
  linkName: {
    type: String,
    required: true
  },
  linkLabel: {
    type: String,
    required: true
  }
})

const route = useRoute()

//check current url
const isActive = computed(() => {
  return route.name === props.linkName
})
</script>

<template>
  <RouterLink :to="{ name: linkName }" class="block px-5 py-1 rounded text-xl font-bold w-full" :class="{
    'bg-white text-nav-text': isActive,
    'text-white': !isActive
  }">
    {{ linkLabel }}
  </RouterLink>
</template>
