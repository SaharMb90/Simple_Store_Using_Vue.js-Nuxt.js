// https://nuxt.com/docs/api/configuration/nuxt-config
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: false,
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
  build: {
    transpile: ['vue3-image-zoom'],
  },
  vite: {
    plugins: [
      viteTsConfigPaths({
        root: './',
      }),
      viteTsConfigPaths({}) as any
    ],
    server: {
      fs: {
        allow: [
          '.', // project root
          '/home/sahar-mirzabaki/Desktop/hhhhh/Simple_Store_Using_Vue.js-Nuxt.js',
          'node_modules'
        ]
      },
    },
    assetsInclude: ['**/*.woff', '**/*.ttf'],
  },
});