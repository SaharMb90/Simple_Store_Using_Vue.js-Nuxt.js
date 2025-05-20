<template>
  <div class="p-4">
    <h1>Cart</h1>
    <div v-for="item in cart" :key="item.id">
      <p>{{ item.name }} - ${{ item.price }}</p>
      <button @click="removeFromCart(item.id)">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '~/stores/cart'

const { cart, removeFromCart } = useCart()
</script>
