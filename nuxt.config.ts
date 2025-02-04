// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/i18n'],
  googleFonts: {
    families: {
      VT323: true,
    },
    display: 'swap',
    preload: true,
  },
  i18n: {
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'ca',
    locales: [
      {
        code: 'ca',
        name: 'Català'
      },
      {
        code: 'es',
        name: 'Español'
      },
      {
        code: 'en',
        name: 'English'
      }
    ],
    strategy: 'prefix',
    detectBrowserLanguage: false,
    lazy: true,
    compilation: {
      strictMessage: false,
      escapeHtml: false
    },
    vueI18n: './i18n.config.ts'
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/pro-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons'
    ]
}
})
