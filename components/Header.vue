<template>
  <header class="header">
    <!-- Hamburger menu button (right side) -->
    <button class="menu-toggle" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="hamburger-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <!-- Header content (center) -->
    <div class="header-content">
      <nav class="nav-links" :class="{ 'nav-open': isMenuOpen }">
      <NuxtLink  to="/" class="nav-item">
         <img src="~/assets/icons/teacher.png" alt="Shopping Cart" class="custom-icon" />
        <span>لیست محصولات</span>
        
        </NuxtLink>
        <NuxtLink  to="/product/1" class="nav-item">
         <img src="~/assets/icons/cup.png" alt="Headset" class="custom-icon" />
          <span>دریافت مشاوره</span>
        </NuxtLink>
        <NuxtLink to="/" class="nav-item">
         <img src="~/assets/icons/user.png" alt="User" class="custom-icon" />
          <span>سوالات متداول</span>
        
        </NuxtLink>
        
        <NuxtLink to="/" class="nav-item">
          <img src="~/assets/icons/phone.png" alt="Phone" class="custom-icon" />
          <span>تماس با ما</span>
        
        </NuxtLink>
        <button class="login-button mobile-login">
          تماس
          
        </button>
      </nav>
      <span class="separator">•</span>
    </div>
    <!-- Desktop login button (left side, hidden on mobile) -->
    <button class="login-button desktop-login">
      تماس
      <img src="~/assets/icons/loginButton.png" alt="Phone" class="custom-icon" />
    </button>
    <!-- Mobile login/contact button (left side on mobile) -->
    <button class="mobile-login-button" @click="handleLogin">
    
       <img src="~/assets/icons/Vector.png" alt="Phone" class="custom-icon" />
    </button>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleLogin = () => {
  console.log('Login/Contact button clicked')
}
</script>