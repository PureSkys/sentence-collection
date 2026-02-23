<template>
  <div class="w-full md:w-48 mb-4">
    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
      <svg class="w-4 h-4 text-purple-500" viewBox="0 0 1024 1024">
        <path d="M512 64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zm0 832c-212.096 0-384-171.904-384-384s171.904-384 384-384 384 171.904 384 384-171.904 384-384 384z" fill="currentColor"/>
        <path d="M512 256a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 0-64h-160V288a32 32 0 0 0-32-32z" fill="currentColor"/>
      </svg>
      获取数量
    </label>
    <div class="flex items-center rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 shadow-sm">
      <button
          class="cursor-pointer flex-1 px-3 py-3.5 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          type="button"
          @click="changeCount(-1)"
      >
        <span class="text-2xl font-bold text-gray-600 dark:text-gray-300">-</span>
      </button>
      <div class="flex-1 py-3.5 text-center bg-white dark:bg-gray-800 border-x border-gray-100 dark:border-gray-600">
        <span class="text-xl font-bold text-gray-900 dark:text-white">{{ app_config.sentences_count }}</span>
      </div>
      <button
          class="cursor-pointer flex-1 px-3 py-3.5 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          type="button"
          @click="changeCount(1)"
      >
        <span class="text-2xl font-bold text-gray-600 dark:text-gray-300">+</span>
      </button>
    </div>
    <div class="flex items-center justify-center gap-1.5 mt-2">
      <svg class="w-3.5 h-3.5 text-amber-500" viewBox="0 0 1024 1024">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="currentColor"/>
      </svg>
      <p class="text-xs text-gray-500 dark:text-gray-400">最多 20 条</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useAppConfigStore} from "~/store/AppConfigStore";
import {getSentences} from "~/utils/Api";
import type { sentence } from "~/type";

const app_config = useAppConfigStore()
const timer = ref<ReturnType<typeof setTimeout> | null>(null)

// 改变句子数量
const changeCount = (val: number) => {
  app_config.isRefreshing = true
  app_config.isLikeMode = false;
  if (timer.value) {
    clearTimeout(timer.value)
  }
  app_config.sentences_count += val
  
  // API文档中limit的最大值是20
  if (app_config.sentences_count < 1) {
    app_config.sentences_count = 1
    app_config.isRefreshing = false
    return;
  }
  if (app_config.sentences_count > 20) {
    app_config.sentences_count = 20
    app_config.isRefreshing = false
    return
  }
  
  timer.value = setTimeout(() => {
    if (app_config.current_category_id) {
      getSentences(app_config.current_category_id, app_config.sentences_count)
          .then(res => {
            app_config.sentences = res as sentence[]
            app_config.isRefreshing = false
          }).catch(() => {
        app_config.isRefreshing = false
      })
    } else {
      app_config.isRefreshing = false
    }
  }, 300)
}
</script>

<style scoped>

</style>