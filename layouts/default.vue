<!-- layouts/default.vue -->
<template>
  <div class="layout-container">
    <Header />
    <div class="main-content">
      <div class="page-content">
     <!--    <MainComponent :products="products" /> -->
        <NuxtPage />
      </div>
      <Sidebar />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Header from '~/components/Header.vue'
import MainComponent from '~/components/MainComponent.vue'
import Footer from '~/components/Footer.vue'

const products = [
  { id: 1, name: 'درب بازویی اتوماتیک', price: 150000 },
  { id: 2, name: 'درب بازویی اتوماتیک', price: 250000 },
  { id: 3, name: 'درب بازویی اتوماتیک', price: 300000 },
  { id: 4, name: 'درب بازویی اتوماتیک', price: 200000 },
  { id: 5, name: 'درب بازویی اتوماتیک', price: 350000 },
  { id: 6, name: 'درب بازویی اتوماتیک', price: 400000 },
]
</script>