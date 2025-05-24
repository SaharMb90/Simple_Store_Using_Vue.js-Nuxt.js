<!-- components/Sidebar.vue -->
<template>
  <aside class="sidebar-menu">
    <!-- Search Section -->
    <div class="section">
      <h6>فیلتر و جست وجو</h6>
      <div v-show="isSearchOpen" class="section-body">
        <div class="search-box">
          <input
            type="text"
            placeholder="جست و جو "
            v-model="searchQuery"
          />
          <button class="search-btn" @click="applySearch">
            <svg xmlns="http://www.w3.org/2000/svg" class="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <button class="main-search-btn" @click="applySearch">جستجو</button>
      </div>
    </div>

    <!-- Availability Toggle Section -->
    <div class="section">
      <h6>درب های موجود</h6>
      <div v-show="isSearchOpen" class="section-body">
        <Switch
          class="switch-visible"
          v-model="isAvailable"
          label="درب های موجود"
          aria-label="Toggle available doors filter"
          role="switch"
          :aria-checked="isAvailable"
        />
      </div>
    </div>

    <!-- Sort Section -->
    <div class="section">
      <h6 @click="toggleSection('sort')">
        مرتب سازی
        <img
          src="/assets/icons/sidebarIcons/arrow.png"
          alt="Toggle"
          class="arrow-icon"
          :class="{ rotated: isSortOpen }"
        />
      </h6>
      <div v-show="isSortOpen" class="section-body sort-section">
        <label v-for="option in sortOptions" :key="option.value" class='label-1'>
          <input type="radio" :value="option.value" v-model="sortOption" />
          {{ option.label }}
        </label>
      </div>
    </div>

    <!-- Category Section -->
    <div class="section">
      <h6 @click="toggleSection('category')">
        دسته بندی
        <img
          src="/assets/icons/sidebarIcons/arrow.png"
          alt="Toggle"
          class="arrow-icon"
          :class="{ rotated: isCategoryOpen }"
        />
      </h6>
      <div v-show="isCategoryOpen" class="section-body category-section">
        <label v-for="(category, index) in categoryLabels" :key="index" class="category-label">
        <span class="badge">{{ Math.floor(Math.random() * 20) + 1 }}</span>
         <span class="label-text">{{ category }}</span>
          <input
            type="checkbox"
            :value="category"
            v-model="selectedCategories"
          />
          
          
         
        </label>
        
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { sidebarFilters } from '@/composables/sidebarFiltersInstance'
import Switch from '~/components/Switch.vue'

// Use the singleton instance
const { searchQuery, sortOption, selectedCategories, applySearch, isAvailable } = sidebarFilters

// Section states
const isSearchOpen = ref(true)
const isSortOpen = ref(true)
const isCategoryOpen = ref(true)

// Sort options
const sortOptions = ref([
  { value: 'count-asc', label: 'تعداد: کم به زیاد' },
  { value: 'count-desc', label: 'تعداد: زیاد به کم' },
  { value: 'rating-desc', label: 'رتبه: زیاد به کم' },
  { value: 'rating-asc', label: 'رتبه: کم به زیاد' },
])

// Category labels from API
const categoryLabels = ref<string[]>([])

const toggleSection = (section: 'search' | 'sort' | 'category') => {
  if (section === 'search') isSearchOpen.value = !isSearchOpen.value
  if (section === 'sort') isSortOpen.value = !isSortOpen.value
  if (section === 'category') isCategoryOpen.value = !isCategoryOpen.value
}

const fetchCategories = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    categoryLabels.value = await res.json()
    console.log('Fetched categories:', categoryLabels.value)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

onMounted(() => {
  fetchCategories()
  console.log('Sidebar mounted, selectedCategories:', selectedCategories?.value, 'isAvailable:', isAvailable?.value)
})
</script>