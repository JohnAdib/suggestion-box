import yaml from "@rollup/plugin-yaml";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Inter: true,
    }
  },
  typescript: {
    typeCheck: false
  },
  vite: {
    plugins: [
      yaml()
    ]
  }
})