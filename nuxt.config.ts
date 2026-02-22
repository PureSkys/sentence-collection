// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    ssr: false,
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
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000'
        }
    },
    app: {
        baseURL: '/sentences/',
        head: {
            title: '句子集',
            meta: [
                {name: 'description', content: '句子集'},
                {name: 'keywords', content: '句子集, 句子, 句子收集, 句子收藏'},
            ],
            link: [
                // 配置站点图标
                {rel: 'icon', type: 'image/x-icon', href: '/sentences/favicon.png'}
            ]
        }
    }
})