<script setup>
// import { onBeforeMount, ref } from 'vue';

//props
const props = defineProps({
  country: {
    type: Object,
    required: true
  }
})

//event
const emit = defineEmits(['onClickSearchCountry'])

//Rate Limit is a problem here

// const img = ref('')
// onBeforeMount(() => {
//   // console.log('xd');
//   fetch('https://pixabay.com/api/?key=44539228-f412a1583685aec57601d6888&q=Anguilla bandera&image_type=photo')
//     .then(res => res.json())
//     .then(el => img.value = el[0]?.webformatURL)
// })
</script>

<template>
  <section class='w-80 group rounded-[15%] overflow-hidden cursor-pointer shadow-[3px_-3px_8px_4px_rgba(0,0,0,0.3)]'
    @click="emit('onClickSearchCountry', country?.code)">
    <figure class='relative'>
      <img class='w-full h-36 object-cover'
        src='https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2023/04/machu-picchu-informacion-full.jpg'
        :alt="country?.name" />
    </figure>
    <div class='px-6 py-4 flex bg-white group-hover:bg-indigo-400'>
      <figure class="me-3 self-center">
        <img class="h-9 min-w-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JZjXBJ508PcGuC33-_M0V3kKBWNEsZ4lag&s"
          :alt="country?.continent?.name">
      </figure>
      <div class="truncate">
        <p class='text-2xl font-bold text-indigo-400 group-hover:text-white'>{{ country?.name }}</p>
        <p class='text-xl font-semibold text-nav-text group-hover:text-white -translate-y-2'>
          {{ country?.continent?.name }}</p>
      </div>
    </div>
  </section>
</template>
