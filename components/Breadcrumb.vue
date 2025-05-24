<!-- components/Breadcrumb.vue -->
<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb-list">
      <li class="breadcrumb-item">
      <img src="~/assets/icons/home.png" alt="Arrow-left" class="custom-icon"/>
      <img src="~/assets/icons/Group.png" alt="Arrow-left" class="custom-icon"/>
        <NuxtLink to="/" class="breadcrumb-link">صفحه اصلی</NuxtLink>
      </li>
      <li class="breadcrumb-item">
       <img src="~/assets/icons/Group.png" alt="Arrow-left" class="custom-icon"/>
        <NuxtLink to="/product/1" class="breadcrumb-link">لیست محصولات</NuxtLink>
      </li>
      <li v-if="isProductPage" class="breadcrumb-item">
        <span class="breadcrumb-current">{{ productTitle }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Determine if we're on a product page
const isProductPage = computed(() => route.path.startsWith('/product/'))

// Get product title from props (passed from product page)
defineProps<{
  productTitle?: string
}>()
</script>

