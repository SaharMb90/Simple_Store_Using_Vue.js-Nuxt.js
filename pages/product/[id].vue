<template>
  <div class="store-container">
    <div class="product-card">
      <img v-image-zoom :src="productDetail" alt="Product Image" class="product-image" />

      <div class="product-details">
        <table class="product-table">
          <tr>
            <td class="label">عنوان محصول:</td>
            <td class="value">{{ productTitle }}</td>
          </tr>
          <tr>
            <td class="label">قیمت:</td>
            <td class="value">{{ productPrice }}</td>
          </tr>
          <tr>
            <td class="label">توضیحات:</td>
            <td class="value">
              <ul class="description-list">
                <li v-for="(item, index) in descriptionItems" :key="index">{{ item }}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="label">نوع:</td>
            <td class="value">{{ productType }}</td>
          </tr>
          <tr>
            <td class="label">امتیاز:</td>
            <td class="value">{{ productRate }}</td>
          </tr>
          <tr>
            <td class="label">تعداد:</td>
            <td class="value">{{ productNumber }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import axios from 'axios'

const route = useRoute()
const productId = route.params.id

// Reactive state for product data
const productTitle = ref('')
const productPrice = ref('')
const productDescription = ref('')
const productDetail = ref('')
const productRate = ref(0) // Default to 0, mapped from rating.rate
const productType = ref('') // Custom field, set to empty string
const productNumber = ref(0) // Custom field, e.g., rating.count or product ID

// Computed property to split description into list items
const descriptionItems = computed(() => {
  return productDescription.value
    .split(/\.|\n/) // Split by period or newline
    .filter(item => item.trim().length > 0) // Remove empty items
    .map(item => item.trim() + (item.endsWith('.') ? '' : '.')) // Ensure proper punctuation
})

let request: { cancel: () => void } | null = null

onMounted(async () => {
  const id = parseInt(productId as string, 10)
  const CancelToken = axios.CancelToken
  request = CancelToken.source()

  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`, {
      cancelToken: request.token
    })
    const product = response.data
    productTitle.value = product.title
    productPrice.value = `${product.price} USD`
    productDescription.value = product.description
    productDetail.value = product.image
    productRate.value = product.rating?.rate || 0 // Use rating.rate, default to 0 if undefined
    productNumber.value = product.rating?.count || id // Use rating.count or product ID as a fallback
    productType.value = product.category || 'Unknown Type'
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message)
    } else {
      console.error('Error fetching product:', error)
    }
  }
})

onUnmounted(() => {
  if (request) request.cancel('Component unmounted')
  productTitle.value = ''
  productPrice.value = ''
  productDescription.value = ''
  productDetail.value = ''
  productRate.value = 0
  productType.value = ''
  productNumber.value = 0
  console.log(`Component for product ${productId} unmounted`)
})

const addToCart = () => {
  console.log(`Added product ${productId} to cart:`, {
    title: productTitle.value,
    price: productPrice.value
  })
  // Add cart logic here
}

import '~/assets/scss/main.scss'
</script>