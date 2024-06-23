<script setup>
import Country from './Country.vue'
import Loader from '@/components/Presentational/Loader.vue'
import { useGetCountries, useGetCountry } from './useQueries.js'
import { computed } from 'vue'
import CountryDetail from './CountryDetail.vue'
import { useCountryStore } from '@/stores/country.js'

const { result, loading, error } = useGetCountries()

const countries = computed(() => result.value?.countries)

const { result: resultCountry, loading: loadingCountry, error: errorCountry, load } = useGetCountry()

const countryData = computed(() => resultCountry.value?.country)

const contryState = useCountryStore()

const handleSearchCountry = (code) => {
  contryState.setCode(code)
  load()
}

const handleCloseCountryDetail = () => {
  contryState.setCode('')
}

</script>

<template>
  <div class="overflow-y-auto h-[82vh]">
    <Loader v-if="loading" />

    <div v-else-if="error" class="text-red-500 text-center md:text-start">Error: {{ error.message }}</div>

    <div v-else-if="countries.length == 0" class="text-center md:text-start">No hay datos</div>

    <TransitionGroup v-else name="countries" tag="article" class="flex justify-center gap-5 flex-wrap md:mt-10 py-5">
      <Country v-for="(country, index) in countries" :key="index" :country="country"
        @onClickSearchCountry="handleSearchCountry" />
    </TransitionGroup>
  </div>
  <CountryDetail v-if="!!contryState.country?.code & !loadingCountry & !errorCountry" :country="countryData"
    @onClickCloseCountryDetail="handleCloseCountryDetail" />
</template>