<template>
  <div class="w-full md:w-48 mb-4">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      获取数量
    </label>
    <div class="flex items-center border rounded-lg overflow-hidden border-gray-200">
      <button
          class="cursor-pointer flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          @click="changeCount(-1)"
      >
        <span class="text-2xl font-medium text-gray-600 dark:text-gray-400">-</span>
      </button>
      <input :value="app_config.sentences_count"
             class=" flex-6 w-full text-center border-gray-200 py-2 border-x focus:outline-none focus:ring-1 focus:ring-amber-50 dark:bg-gray-900 dark:text-white"
             disabled
             type="text">
      <button
          class="cursor-pointer flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          @click="changeCount(1)"
      ><span class="text-2xl font-medium text-gray-600 dark:text-gray-400">+</span>
      </button>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">最多 15 条</p></div>
</template>

<script lang="ts" setup>
import {useAppConfigStore} from "~/store/AppConfigStore";
import type {sentence} from "~/type";

const app_config = useAppConfigStore()  // 获取应用配置仓库
const timer = ref()

// 改变句子数量
const changeCount = (val: number) => {
  app_config.isRefreshing = true
  app_config.isLikeMode = false;
  if (timer.value) {
    clearTimeout(timer.value)
  }
  app_config.sentences_count += val
  if (app_config.sentences_count < 1) {
    app_config.sentences_count = 1
    app_config.isRefreshing = false
    return;
  }
  if (app_config.sentences_count > 15) {
    app_config.sentences_count = 15
    app_config.isRefreshing = false
    return
  }
  timer.value = setTimeout(() => {
    getSentences(app_config.sentence_type, app_config.sentences_count)
        .then(res => {
          app_config.sentences = res as [sentence]
          app_config.isRefreshing = false
        }).catch(() => {
      app_config.isRefreshing = false
    })
  }, 300)
}
</script>

<style scoped>

</style>