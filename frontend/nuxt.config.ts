// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-12-17',
  fonts: {
    provider: 'google',
  },
});
