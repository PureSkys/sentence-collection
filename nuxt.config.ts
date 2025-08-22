// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/eslint',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxt/ui'
    ],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    app: {
        baseURL: '/sentences/',
        head: {
            title: '句子集',
            meta: [
                {name: 'description', content: '句子集'}
            ],
        }
    }
})