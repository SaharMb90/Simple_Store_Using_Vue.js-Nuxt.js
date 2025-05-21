<template>
  <aside class="sidebar-menu">
    <!-- Search Box -->
    <div class="search-box">
      <input type="text" placeholder="دو لنگه" />
      <button class="search-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
    <button class="main-search-btn">جستجو</button>

    <!-- Toggle -->
    <div class="toggle">
      <span class="toggle-btn">🏠</span>
      <span class="toggle-label">درب‌های موجود</span>
    </div>

    <!-- Sorting -->
    <div class="sort-section">
      <h4>مرتب سازی</h4>
      <label><input type="radio" name="sort" checked /> تعداد: کم به زیاد</label>
      <label><input type="radio" name="sort" /> تعداد: زیاد به کم</label>
      <label><input type="radio" name="sort" /> رتبه: زیاد به کم</label>
      <label><input type="radio" name="sort" /> رتبه: کم به زیاد</label>
    </div>

    <!-- Category -->
    <div class="category-section">
      <h4>دسته بندی</h4>
      <label><input type="checkbox" checked /> مسکن و ساختمان <span class="badge">۱۲</span></label>
      <label><input type="checkbox" /> بهداشت و درمان <span class="badge">۳</span></label>
      <label><input type="checkbox" /> صنعتی و کارخانه <span class="badge">۴</span></label>
    </div>
  </aside>
</template>
