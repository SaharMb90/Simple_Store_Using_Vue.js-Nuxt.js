<!-- components/Switch.vue -->
<template>
  <div class="switch">
    <input
      type="checkbox"
      class="switch-input"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :id="id"
    />
    <div
      class="switch-track"
      :class="{ 'active': modelValue }"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <div
        class="switch-thumb"
        :class="{ 'active': modelValue }"
        :style="{ right: modelValue ? '2px' : 'auto', left: modelValue ? 'auto' : '2px' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

// Define props and destructure modelValue
const { modelValue, label, id: propId } = defineProps<{
  modelValue: boolean
  label?: string
  id?: string
}>()

defineEmits(['update:modelValue'])

const id = computed(() => propId || `switch-${Math.random().toString(36).substr(2, 9)}`)

onMounted(() => {
  console.log('Switch component mounted, modelValue:', modelValue)
})
</script>

<style scoped>
/* Styles moved to main.scss */
</style>