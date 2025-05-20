<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Simple Vue Store</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <NuxtLink to="/cart" class="mt-6 inline-block text-blue-600 hover:underline">View Cart</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const products = [
  { id: 1, name: 'Product A', price: 15 },
  { id: 2, name: 'Product B', price: 25 },
  { id: 3, name: 'Product C', price: 30 }
]
</script>
