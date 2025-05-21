<template>
  <div class="product-details">
    <!-- Product Image -->
    <img :src="productDetail" alt="Product Image" class="product-image" />
    
    <!-- Product Title -->
    <h1 class="product-title">جزییات محصول</h1>
    
    <!-- Product Price -->
    <p class="product-price">قیمت: {{ productPrice }}</p>
    
    <!-- Product Description -->
    <p class="product-description">
      سس مایونز کم چرب سحر، انتخابی سالم برای رژیم غذایی شما.<br />
      طعم دلپذیر با چربی کم و ارزش غذایی بالا.<br />
      ایده‌آل برای سالاد، ساندویچ و انواع غذاها.
    </p>
    
    <!-- Add to Cart Button -->
    <button class="product-button">سبد خرید</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id

// Placeholder for product data (you can fetch this dynamically)
import '~/assets/scss/main.scss'; // Adjust the path based on your project structure
import productDetail from '~/assets/img/productDetail.png' // Replace with actual image URL
const productPrice = '۱۲,۰۰۰ تومان' // Replace with actual price
</script>