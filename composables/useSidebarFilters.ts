// composables/useSidebarFilters.ts
import { ref, watch } from 'vue'

export const useSidebarFilters = () => {
  const searchQuery = ref('')
  const sortOption = ref('count-asc')
  const selectedCategories = ref<string[]>([])
  const customFilters = ref<string[]>([])
  const isAvailable = ref(false) // Ensure this is defined

  // Define sort options mapping
  const sortOptionsMap = ref([
    { value: 'count-asc', label: 'تعداد: کم به زیاد' },
    { value: 'count-desc', label: 'تعداد: زیاد به کم' },
    { value: 'rating-desc', label: 'رتبه: زیاد به کم' },
    { value: 'rating-asc', label: 'رتبه: کم به زیاد' },
  ])

  watch(selectedCategories, (newCategories, oldCategories) => {
    const addedCategories = newCategories.filter(cat => !oldCategories.includes(cat))
    addedCategories.forEach(cat => {
      if (!customFilters.value.includes(cat)) {
        customFilters.value.push(cat)
      }
    })
    const removedCategories = oldCategories.filter(cat => !newCategories.includes(cat))
    removedCategories.forEach(cat => {
      customFilters.value = customFilters.value.filter(f => f !== cat)
    })
    applySearch()
  }, { deep: true })

  watch(sortOption, (newSortOption, oldSortOption) => {
    if (oldSortOption) {
      const oldSortLabel = sortOptionsMap.value.find(opt => opt.value === oldSortOption)?.label
      if (oldSortLabel && customFilters.value.includes(oldSortLabel)) {
        customFilters.value = customFilters.value.filter(f => f !== oldSortLabel)
      }
    }
    const newSortLabel = sortOptionsMap.value.find(opt => opt.value === newSortOption)?.label
    if (newSortLabel && !customFilters.value.includes(newSortLabel)) {
      customFilters.value.push(newSortLabel)
    }
    applySearch()
  })

  watch(isAvailable, (newValue) => {
    const label = 'درب های موجود'
    if (newValue) {
      if (!customFilters.value.includes(label)) {
        customFilters.value.push(label)
      }
    } else {
      if (customFilters.value.includes(label)) {
        customFilters.value = customFilters.value.filter(f => f !== label)
      }
    }
    applySearch()
  })

  const applySearch = () => {
    const query = {
      query: searchQuery.value,
      sort: sortOption.value,
      categories: selectedCategories.value,
      customFilters: customFilters.value,
      isAvailable: isAvailable.value,
    }
    console.log('API Called with:', JSON.parse(JSON.stringify(query)))
  }

  const addFilter = (filter: string) => {
    if (!customFilters.value.includes(filter)) {
      customFilters.value.push(filter)
      applySearch()
    }
  }

  const removeFilter = (filter: string) => {
    customFilters.value = customFilters.value.filter(f => f !== filter)
    if (selectedCategories.value.includes(filter)) {
      selectedCategories.value = selectedCategories.value.filter(cat => cat !== filter)
    }
    const sortOptionLabel = sortOptionsMap.value.find(opt => opt.label === filter)
    if (sortOptionLabel && sortOption.value === sortOptionLabel.value) {
      sortOption.value = ''
    }
    if (filter === 'درب های موجود') {
      isAvailable.value = false
    }
    applySearch()
  }

  return {
    searchQuery,
    sortOption,
    selectedCategories,
    customFilters,
    isAvailable, // Ensure this is exported
    applySearch,
    addFilter,
    removeFilter,
    sortOptionsMap, // Add this if needed elsewhere
  }
}