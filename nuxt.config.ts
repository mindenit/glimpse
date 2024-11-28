// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@mindenit/ui/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],
  icon: {
    provider: 'iconify',
    serverBundle: {
      collections: ['ph'],
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? ['vue', '@mindenit/ui', '@internationalized/date']
        : [],
  },
})
