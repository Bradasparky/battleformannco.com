import presetWind4 from "@unocss/preset-wind4";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Battle For Mann Co.",
      link: [
        { href: "https://fonts.cdnfonts.com/css/tf2-build", rel: "stylesheet" },
        { href: "https://fonts.cdnfonts.com/css/tf2-secondary", rel: "stylesheet" },
        { href: "https://fonts.cdnfonts.com/css/noto-sans", rel: "stylesheet" },
        { href: "https://fonts.cdnfonts.com/css/gg-sans-2", rel: "stylesheet" },
      ],
      meta: [
        { charset: "UTF-8" },
        {
          name: "viewport",
          content: "width=device-scale, initial-scale=1",
        },
        {
          name: "og:title",
          content: "Battle For Mann Co.",
        },
        { name: "og:type", content: "website" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    steamGameServerApiKey: "7BF431448D1F461CF86C4BFB5DF54D03"
  },
  unocss: {
    nuxtLayers: true,
    presets: [
      presetWind4(),
    ]
  },
  typescript: {
    strict: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
    "@unocss/nuxt",
  ],
});