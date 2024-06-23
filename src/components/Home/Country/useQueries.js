import {
  ALL_COUNTRIES,
  ALL_COUNTRIES_BY_CONTINENT_FILTER,
  GET_CONTRY_BY_CODE
} from './graphql-queries.js'
import { useQuery, useLazyQuery } from '@vue/apollo-composable'
import { useFilterStore } from '@/stores/filter.js'
import { useCountryStore } from '@/stores/country.js'
import { computed } from 'vue'

export function useGetCountries() {
  const filter = useFilterStore()

  const query = computed(() => {
    return filter.filters.continentCodes.length > 0
      ? ALL_COUNTRIES_BY_CONTINENT_FILTER
      : ALL_COUNTRIES
  })

  const { result, loading, error } = useQuery(query, filter.filters)

  return { result, loading, error }
}

export function useGetCountry() {
  const filter = useCountryStore()

  const { result, loading, error, load } = useLazyQuery(GET_CONTRY_BY_CODE, filter.country)

  return { result, loading, error, load }
}
