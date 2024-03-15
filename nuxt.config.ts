// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // if you want to use server-side rendering (SSR)
  ssr: true,
  // if you want to use static HTML generation (SSG)
  // target:'static',
  typescript: {
    shim: false,
  },
  // css: ["@/assets/css/styles.css"],
  plugins: [],
  generate: { routes: ["/404"] },
  runtimeConfig: {
    private: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  devtools: { enabled: true },
});
