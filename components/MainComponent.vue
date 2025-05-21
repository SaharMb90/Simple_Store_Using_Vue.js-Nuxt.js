<template>
  <div class="main-component">
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-details">
          <h3 class="product-title">{{ product.name }}</h3>
          <NuxtLink :to="`/product/${product.id}`" class="product-button">
            <span>مشاهده جزییات</span>
            <img :src="arrowLeftImg" alt="arrow" class="button-image" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import arrowLeftImg from '~/assets/icons/arrow-left.png'

// Define the shape of a product
interface Product {
  id: number
  name: string
  price: number
  image: string
}

// Reactive state for products
const products = ref<Product[]>([])

// Fetch products from Fake Store API on mount
onMounted(async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    products.value = response.data.map((item: any) => ({
      id: item.id,
      name: item.title, // Map title to name as per component props
      price: item.price,
      image: item.image,
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>