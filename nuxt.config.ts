// https://nuxt.com/docs/api/configuration/nuxt-config
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/fonts/fonts.css',
    '@/assets/scss/main.scss',
    //'@/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  components: true,
 
  plugins: [],
  
  vite: {
    plugins: [
      viteTsConfigPaths({
        root: './',
      }),
    ],
    server: {
      fs: {
        allow: [
          '/home/sahar-mirzabaki/Desktop/Simple_Store_Using_Vue.js-Nuxt.js',
          '/home/sahar-mirzabaki/node_modules/@fortawesome/fontawesome-free/webfonts',
        ],
      },
    },
    assetsInclude: ['**/*.woff', '**/*.ttf'],
  },
});