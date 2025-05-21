<template>
  <div class="product-details">
    <div class="product-image">
       <img :src="productDetail" alt="productDetail" class="button-image" />
    </div>

    <div class="product-info">
      <div class="product-header">
        <h1 class="product-name">پرده ۲۰ Patis</h1>
        <span class="zoom-icon">
          <i class="fas fa-search-plus"></i>
        </span>
      </div>

      <div class="product-specs">
        <div class="spec-row">
          <span class="spec-label">قیمت</span>
          <span class="spec-value">۲۸,۰۰۰,۰۰۰ تومان</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">توضیحات</span>
          <span class="spec-value">
            <ul>
              <li>سنسورهای تشخیص موانع: دارای سنسورهای اولتراسونیک برای تشخیص موانع در مسیر درب</li>
              <li>توقف خودکار: در صورت تشخیص موانع، درب به صورت خودکار توقف و باز نمی‌شود</li>
              <li>کلید اضطراری: دارای کلید اضطراری برای قطع فوری تغذیه و توقف درب</li>
            </ul>
          </span>
        </div>
        <div class="spec-row">
          <span class="spec-label">دسته‌بندی</span>
          <span class="spec-value">کشویی</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">رتبه</span>
          <span class="spec-value">۲</span>
        </div>
        <div class="spec-row">
          <span class="spec-label">تعداد</span>
          <span class="spec-value">۵</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import productDetail from '~/assets/img/productDetail.png'
const route = useRoute()
const productId = route.params.id
</script>


