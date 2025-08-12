// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    '@nuxt/fonts'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Ultra: true
    }
  }
})