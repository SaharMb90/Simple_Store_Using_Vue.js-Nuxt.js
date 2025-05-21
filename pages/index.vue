<!-- pages/index.vue -->
<template>
  <div>
    <MainComponent :products="products" />
  </div>
</template>

<script setup lang="ts">
import MainComponent from '~/components/MainComponent.vue'
import { useState } from '#app'

const products = useState('products', () => [
  { id: 1, name: 'درب بازویی اتوماتیک',  },
  { id: 2, name: 'درب بازویی اتوماتیک', },
  { id: 3, name: 'درب بازویی اتوماتیک', },
  { id: 4, name: 'درب بازویی اتوماتیک',  },
  { id: 5, name: 'درب بازویی اتوماتیک',  },
  { id: 6, name: 'درب بازویی اتوماتیک', },
])
</script>