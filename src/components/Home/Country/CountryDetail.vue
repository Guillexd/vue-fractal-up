<script setup>
//props
const props = defineProps({
  country: {
    type: Object,
    required: true
  }
})

//event
const emit = defineEmits(['onClickCloseCountryDetail'])
</script>

<template>
  <aside
    class="absolute flex flex-col bottom-0 right-0 z-10 bg-white w-96 px-10 overflow-hidden shadow-[-1px_0px_8px_1px_rgba(0,0,0,0.3)]">
    <button class="self-end translate-x-6 my-3" @click="emit('onClickCloseCountryDetail')">
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
      </svg>
    </button>
    <figure class='relative'>
      <img class='w-full h-48 object-cover rounded-xl'
        src='https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2023/04/machu-picchu-informacion-full.jpg'
        :alt="country?.name" />
    </figure>
    <div class='py-4 flex bg-white group-hover:bg-indigo-400'>
      <figure class="me-3 self-center">
        <img class="h-10 min-w-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JZjXBJ508PcGuC33-_M0V3kKBWNEsZ4lag&s"
          :alt="country?.continent?.name">
      </figure>
      <div class="text-wrap">
        <p class='text-2xl font-bold text-indigo-400 group-hover:text-white'>{{ country?.name }}</p>
        <p class='text-xl font-semibold text-nav-text group-hover:text-white -translate-y-2'>
          {{ country?.continent?.name }}
        </p>
      </div>
    </div>
    <div>
      <p class='text-2xl'>
        <span class="font-medium text-indigo-400">Capital: </span>
        <span class="font-normal text-nav-text translate-x-10">{{ country?.capital }}</span>
      </p>
      <p class='text-2xl'>
        <span class="font-medium text-indigo-400">Language: </span>
        <span class="font-normal text-nav-text translate-x-10">
          {{ country?.languages.map(lg => lg.name).join(', ') + '.' }}
        </span>
      </p>
      <p class='text-2xl'>
        <span class="font-medium text-indigo-400">Currency: </span>
        <span class="font-normal text-nav-text translate-x-10">
          {{ country?.currencies.join(', ') + '.' }}
        </span>
      </p>
      <section class="mb-10">
        <p class="text-2xl font-medium text-indigo-400">Region: </p>
        <div class="ms-2 max-h-36 overflow-y-auto p-3 mt-2 shadow-[-1px_0px_8px_1px_rgba(0,0,0,0.3)]">
          <ul class="text-md font-semibold text-nav-text">
            <li v-for="(state, index) in country?.states" :key="index">{{ state.name }}</li>
            <li v-if="country?.states?.length === 0">No states.</li>
          </ul>
        </div>
      </section>
    </div>
  </aside>
</template>
