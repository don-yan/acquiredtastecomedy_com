// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    css: [
        // "@/assets/css/styles.css",
        // 'primevue/resources/themes/aura-light-noir/theme.css',
        'primevue/resources/themes/lara-dark-teal/theme.css'
    ],
    devtools: {enabled: true},

    generate: {routes: ["/404"]},
    modules: [
        // '@nuxtjs/tailwindcss',
        'nuxt-primevue'
    ],

    plugins: [],
    primevue: {
        // cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
        options: {
            unstyled: false,
            ripple: true,
            // inputStyle: 'filled'
        }
    },

    runtimeConfig: {
        private: {
            CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
            CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
    },

    srcDir: 'src/',
    // if you want to use server-side rendering (SSR)
    ssr: true,
    // if you want to use static HTML generation (SSG)
    // target:'static',
    typescript: {
        shim: false,
    },

});
