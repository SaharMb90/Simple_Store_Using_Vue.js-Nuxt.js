<!-- components/MainComponent.vue -->
<template>
  <div class="main-component">
    <div class="products-grid">
      <div
        v-for="(product, index) in filteredAndSortedProducts"
        :key="product.id"
        class="product-card-main"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="product-image"
          @click="openLightbox(index)"
        />
        <div class="product-details">
          <h3 class="product-title">{{ product.name }}</h3>
          <NuxtLink :to="`/product/${product.id}`" class="product-button">
            <span>مشاهده جزییات</span>
            <img :src="arrowLeftImg" alt="arrow" class="button-image" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <VueEasyLightbox
      :visible="visible"
      :imgs="filteredAndSortedProducts.map(p => p.image)"
      :index="lightboxIndex"
      @hide="visible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'
import VueEasyLightbox from 'vue-easy-lightbox'
import arrowLeftImg from '~/assets/icons/arrow-left.png'
import { sidebarFilters } from '@/composables/sidebarFiltersInstance'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: { rate: number; count: number }
}

const products = ref<Product[]>([])
const visible = ref(false)
const lightboxIndex = ref(0)

// Use sidebarFilters to access selectedCategories and sortOption
const { selectedCategories, sortOption } = sidebarFilters

// Computed property to filter and sort products
const filteredAndSortedProducts = computed(() => {
  let filteredProducts = products.value

  // Filter by selected categories
  if (selectedCategories.value.length > 0) {
    filteredProducts = products.value.filter(product =>
      selectedCategories.value.includes(product.category)
    )
  }

  // Sort based on sortOption
  return [...filteredProducts].sort((a, b) => {
    switch (sortOption.value) {
      case 'count-asc':
        return a.rating.count - b.rating.count
      case 'count-desc':
        return b.rating.count - a.rating.count
      case 'rating-asc':
        return a.rating.rate - b.rating.rate
      case 'rating-desc':
        return b.rating.rate - a.rating.rate
      default:
        return 0 // No sorting if sortOption is empty
    }
  })
})

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  visible.value = true
}

onMounted(async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    products.value = response.data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      rating: {
        rate: item.rating.rate,
        count: item.rating.count,
      },
    }))
    console.log('Fetched products:', products.value)
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})

// Debug: Watch for changes in filters
watch(
  [selectedCategories, sortOption],
  ([newCategories, newSortOption]) => {
    console.log('Filters changed:', {
      selectedCategories: newCategories,
      sortOption: newSortOption,
      filteredProductCount: filteredAndSortedProducts.value.length,
    })
  },
  { deep: true }
)
</script>

