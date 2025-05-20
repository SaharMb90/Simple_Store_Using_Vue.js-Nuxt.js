


<template>
  <div class="border p-4 rounded shadow hover:shadow-md transition">
    <h3 class="text-lg font-semibold">{{ product?.name }}</h3>
    <p class="text-sm text-gray-600">£{{ product?.price }}</p>
    <button class="mt-2 px-4 py-1 bg-blue-500 text-white rounded" @click="addToCart(product)">
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: { id: number; name: string; price: number }
}>()

const { addToCart } = useCart()
import { useCart } from '~/stores/cart'
</script>
