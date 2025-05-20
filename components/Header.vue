<template>
  <header class="header">
    <button class="login-button">
      تماس
      <img src="~/assets/icons/loginButton.png" alt="Phone" class="custom-icon" />
    </button>
    <div class="header-content">
      <nav class="nav-links">
        <a href="#" class="nav-item">
          <img src="~/assets/icons/teacher.png" alt="Shopping Cart" class="custom-icon" />
          <span>لیست محصولات</span>
        </a>
        <a href="#" class="nav-item">
          <img src="~/assets/icons/cup.png" alt="Headset" class="custom-icon" />
          <span>دریافت مشاوره</span>
        </a>
        <a href="#" class="nav-item">
          <img src="~/assets/icons/user.png" alt="User" class="custom-icon" />
          <span>سوالات متداول</span>
        </a>
        <a href="#" class="nav-item">
          <img src="~/assets/icons/phone.png" alt="Phone" class="custom-icon" />
          <span>تماس با ما</span>
        </a>
      </nav>
      <span class="separator">•</span> <!-- Added separator to match UX design -->
    </div>
  </header>
</template>

<script setup>
// No logic needed; purely presentational
</script>
