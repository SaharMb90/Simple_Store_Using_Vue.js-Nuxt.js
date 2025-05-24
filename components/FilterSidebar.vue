<!-- components/FilterSidebar.vue -->
<template>
  <div class="filter-input-wrapper">
    <div class="filters">
      <span
        v-for="(filter, index) in customFilters"
        :key="index"
        class="filter-chip"
      >
        <span class="chip-text">{{ filter }}</span>
        <button class="remove-btn" @click="removeFilter(filter)">
          ×
        </button>
      </span>
      <input
        class="input"
        type="text"
        placeholder="فیلترهای اعمال شده"
        v-model="localInput"
        @keydown.enter.prevent="addLocalFilter"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { sidebarFilters } from '@/composables/sidebarFiltersInstance'

const localInput = ref('')
const { customFilters, addFilter, removeFilter } = sidebarFilters

const addLocalFilter = () => {
  if (localInput.value.trim() !== '') {
    addFilter(localInput.value.trim())
    localInput.value = ''
  }
}

onMounted(() => {
  console.log('FilterSidebar mounted, customFilters:', customFilters.value)
})
</script>




<style scoped>
.filter-input-wrapper {
  margin: 10px 0!important;
  background: #fdfdfd;
  border: 1px solid #f0f0f0;
  border-radius: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  

  @media (max-width: 680px) {
    display:none ;
  }
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.filter-chip {
  display: flex;
  align-items: center;
  background-color: #fcecf1;
  border-radius: 20px;
  padding: 6px 10px;
  font-size: 14px;
  color: #333;
}

.chip-text {
  margin-left: 6px;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #e20054;
}

.input {
  flex-grow: 1;
  min-width: 150px;
  border: none;
  outline: none;
  padding: 6px 10px;
  font-size: 14px;
  direction: rtl;
}

.filter-label {
  margin-top: 4px;
  font-size: 12px;
  color: #666;
}
</style>
