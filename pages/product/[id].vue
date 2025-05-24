<template>
  <div class="store-container">
    <div class="product-card">
      <div class="header-part">
        <h2>{{ productTitle }}</h2>
        <img
          :src="productDetail"
          alt="Product Image"
          class="product-image-detail"
          @click="visible = true"
        />
        <VueEasyLightbox
          :visible="visible"
          :imgs="[productDetail]"
          @hide="visible = false"
        />
      </div>
      <div class="content-part">
        <div class="product-details">
          <h2 class="label">مشخصات فنی</h2>
          <table class="product-table">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import VueEasyLightbox from 'vue-easy-lightbox'

const visible = ref(false)

const route = useRoute()
const productId = route.params.id

const productTitle = ref('')
const productPrice = ref('')
const productDescription = ref('')
const productDetail = ref('')
const productRate = ref(0)
const productType = ref('')
const productNumber = ref(0)

const descriptionItems = computed(() =>
  productDescription.value
    .split(/\.|\n/)
    .filter((item) => item.trim().length > 0)
    .map((item) => item.trim() + (item.endsWith('.') ? '' : '.'))
)

let request: { cancel: () => void } | null = null

onMounted(async () => {
  const id = parseInt(productId as string, 10)
  const CancelToken = axios.CancelToken
  request = CancelToken.source()

  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`, {
      cancelToken: request.token,
    })
    const product = response.data
    productTitle.value = product.title
    productPrice.value = `${product.price} USD`
    productDescription.value = product.description
    productDetail.value = product.image
    productRate.value = product.rating?.rate || 0
    productNumber.value = product.rating?.count || id
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
})
</script>