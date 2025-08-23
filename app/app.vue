<template>
  <UApp>
    <div :class="app_config.dark_mode ? 'dark' : ''"
         class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header>
        <AppHeader></AppHeader>
      </header>

      <main class="container mx-auto px-4 py-8 max-w-6xl">
        <!--      标题-->
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">发现精彩句子</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            从文学、诗词、哲学、影视等多种类型中发现精彩句子，保存你喜欢的内容，分享你的感悟。</p>
        </div>
        <!--      中间部分卡片-->
        <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 mb-8 border border-gray-100 dark:border-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="md:col-span-3">
              <SentenceType></SentenceType>
            </div>
            <SentenceCount></SentenceCount>
          </div>
          <RefreshAndSwitch></RefreshAndSwitch>
        </div>
        <!--      句子列表-->
        <section class="mb-16">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <i class="mr-2">
              <svg class="icon" height="20" p-id="11674" t="1755836126774"
                   version="1.1"
                   viewBox="0 0 1024 1024" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M187.392 70.656q28.672 0 48.64 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t47.616-19.456l54.272 0zM889.856 70.656q27.648 0 47.616 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t48.64-19.456l437.248 0zM187.392 389.12q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t47.616-19.968l54.272 0zM889.856 389.12q27.648 0 47.616 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t48.64-19.968l437.248 0zM187.392 708.608q28.672 0 48.64 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t47.616-19.968l54.272 0zM889.856 708.608q27.648 0 47.616 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t48.64-19.968l437.248 0z"
                    fill="#4f46e5" p-id="11675"></path>
              </svg>
            </i>
            句子列表
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SentenceCard></SentenceCard>
          </div>

        </section>
      </main>

      <footer>
        <AppFooter></AppFooter>
      </footer>
    </div>
  </UApp>
</template>
<script lang="ts" setup>
import {useAppConfigStore} from "~/store/AppConfigStore";
import {getSentences} from "~/utils/Api";
import type {sentence} from "~/type";

const app_config = useAppConfigStore();
onMounted(() => {
  console.log('app_config', app_config.sentences.length)
  if (app_config.sentences.length <= 0) {
    getSentences(app_config.sentence_type, app_config.sentences_count)
        .then(res => {
          app_config.sentences = res as [sentence]
        });
    console.log('执行了')
  }
  app_config.isRefreshing = false;
})
</script>