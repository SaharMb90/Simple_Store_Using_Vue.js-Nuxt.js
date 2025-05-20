<template>
  <div class="flex flex-col min-h-screen">
   <Header/>
    <NuxtPage class="flex-grow" />
   <div class="main-content">
      <Sidebar />
      <div class="page-content">
        <slot />
      </div>
    </div>
    <Footer />
   
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


</script>
