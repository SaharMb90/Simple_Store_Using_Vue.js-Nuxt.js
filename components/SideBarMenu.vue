<!-- components/Sidebar.vue -->
<template>
  <div class="sidebar-container">
    <button class="sidebar-toggle" @click="toggleSidebar">
      <span v-if="isOpen">بستن</span>
      <span v-else>باز کردن</span>
    </button>
    <nav :class="['sidebar-menu', { 'sidebar-open': isOpen }]">
      <ul class="sidebar-links">
        <li class="sidebar-item">
          <NuxtLink to="/" class="sidebar-link">صفحه اصلی</NuxtLink>
        </li>
        <li class="sidebar-item">
          <NuxtLink to="/products" class="sidebar-link">محصولات</NuxtLink>
        </li>
        <li class="sidebar-item">
          <NuxtLink to="/cart" class="sidebar-link">سبد خرید</NuxtLink>
        </li>
        <li class="sidebar-item">
          <NuxtLink to="/about" class="sidebar-link">درباره ما</NuxtLink>
        </li>
        <li class="sidebar-item">
          <NuxtLink to="/contact" class="sidebar-link">تماس با ما</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>