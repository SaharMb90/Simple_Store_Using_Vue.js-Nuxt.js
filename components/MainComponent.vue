<!-- components/MainComponent.vue -->
<template>
  <div class="main-component">
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="productImg" alt="Product Image" class="product-image" />
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
import productImg from '~/assets/img/productimg.png'
import arrowLeftImg from '~/assets/icons/arrow-left.png'

defineProps<{
  products: Array<{
    id: number
    name: string
    price: number
  }>
}>()
</script>