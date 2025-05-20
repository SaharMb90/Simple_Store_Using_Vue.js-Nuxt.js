<template>
  <footer class="bg-white border-t mt-8 footer">
    <div class="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-right">
      <!-- Support Info -->
      <div class="text-sm text-gray-600 seven">
        <div class="flex flex-col justify-center items-center h-full w-full">
           هفت روز هفته از24 شبانه روز پاسخگو نیستیم
        </div>
      </div>

      <!-- Quick Access -->
      <div>
        <h3 class="font-bold mb-2">دسترسی سریع</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="text-sm">درباره ما</a></li>
          <li><a href="#">بلاگ</a></li>
          <li><a href="#">تماس با ما</a></li>
          <li><a href="#">خدمات پس از فروش</a></li>
        </ul>
      </div>

      <!-- Site Guide -->
      <div>
        <h3 class="font-bold mb-2">راهنمای سایت</h3>
        <ul class="space-y-1 text-sm text-gray-600">
          <li><a href="#" class="flex items-center justify-end gap-2"><span>قوانین و مقررات</span></a></li>
          <li><a href="#" class="flex items-center justify-end gap-2"><span>دریافت مشاوره</span></a></li>
          <li><a href="#" class="flex items-center justify-end gap-2"><span>انتقادات و پیشنهادات</span></a></li>
        </ul>
      </div>

      <!-- Social Media Links -->
      <div>
        <h3 class="font-bold mb-2">شبکه‌های اجتماعی</h3>
        <ul class="space-y-1">
          <li><a href="#" class="flex items-center justify-end gap-2 text-sm text-gray-600 hover:text-blue-500">
              <img src="~/assets/icons/footerIcons/telegram(1).png" alt="Telegram" class="custom-icon" />
              <span>تلگرام</span>
            </a></li>
          <li><a href="#" class="flex items-center justify-end gap-2 text-sm text-gray-600 hover:text-pink-500">
              <img src="~/assets/icons/footerIcons/instagram(1).png" alt="Instagram" class="custom-icon" />
              <span>اینستاگرام</span>
            </a></li>
          <li><a href="#" class="flex items-center justify-end gap-2 text-sm text-gray-600 hover:text-blue-700">
              <img src="~/assets/icons/footerIcons/Vector.png" alt="LinkedIn" class="custom-icon" />
              <span>لینکدین</span>
            </a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="row">
      <div class="col flex-1"></div>
      <div class="col">
        <!-- Section 1: Copyright and Social Media -->
        <div class="flex-col">
          <p>
            تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی برداری پیگرد قانونی دارد.
          </p>
          <div class="flex ">
            <img src="~/assets/icons/footerIcons/telegram.png" alt="Telegram" class="social-icon footer-bottom-icons" />
            <img src="~/assets/icons/footerIcons/instagram.png" alt="Instagram" class="social-icon footer-bottom-icons" />
            <img src="~/assets/icons/footerIcons/linkedin.png" alt="LinkedIn" class="social-icon footer-bottom-icons" />
            <img src="~/assets/icons/footerIcons/twitter.png" alt="Twitter" class="social-icon footer-bottom-icons" />
            <img src="~/assets/icons/footerIcons/youtube.png" alt="YouTube" class="social-icon footer-bottom-icons" />
          </div>
        </div>
      </div>
      <div class="col">
        <!-- Section 2: Badges -->
        <div class="badges-section">
          <img src="~/assets/icons/footerIcons/Enamad.png" alt="Enamad Badge" class="social-icon" />
          <img src="~/assets/icons/footerIcons/Enamad1.png" alt="Enamad Badge 1" class="social-icon" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed; purely presentational
</script>