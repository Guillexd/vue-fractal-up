<script setup>
import SearchButton from './SearchButton.vue'
import SearchInput from './SearchInput.vue';
</script>
<template>
  <section class='w-full py-2 px-4 flex justify-center'>
    <div
      class='relative w-full sm:min-w-[calc(80%)] lg:max-w-3xl bg-white rounded-full h-20 shadow-lg pt-1 pb-2 flex justify-between px-6'>
      <div class="flex-1 ms-3" @click.stop>
        <SearchInput />
      </div>
      <div class="flex-1 hidden sm:flex sm:flex-col sm:justify-center">
        <SearchButton />
      </div>
    </div>
  </section>
</template>
