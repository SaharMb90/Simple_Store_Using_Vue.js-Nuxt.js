<template>
  <div class="layout-container">
    <Header />
     <Breadcrumb/>
    <div class="main-content">
      <!-- Conditionally render page-content and Sidebar only if not on /product/* -->
      <template v-if="!isProductRoute">
        <div class="page-content">
          <FilterSidebar />
          <NuxtPage />
        </div>
        <ClientOnly>
          <Sidebar />
        </ClientOnly>
      </template>
      <!-- Render only NuxtPage for /product/* routes -->
      <NuxtPage v-else />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import FilterSidebar from '~/components/FilterSidebar.vue'
import Sidebar from '~/components/Sidebar.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Breadcrumb from '~/components/Breadcrumb'


// Determine if the current route is a product route
const route = useRoute()
const isProductRoute = computed(() => route.path.startsWith('/product/'))
</script>