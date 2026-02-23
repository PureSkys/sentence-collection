<template>
  <div class="w-full mb-4">
    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
      <svg class="w-4 h-4 text-indigo-500" viewBox="0 0 1024 1024">
        <path d="M128 128h768v128H128V128zm0 256h768v128H128V384zm0 256h768v128H128V640z" fill="currentColor"/>
      </svg>
      内容类型
    </label>
    <div class="flex items-center gap-2.5 overflow-x-auto pb-1 -mx-1 px-1">
      <button
          :class="app_config.current_category_id === 'all' && !app_config.isLikeMode
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 scale-105'
                : 'bg-gray-50 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'"
          class="cursor-pointer px-4 py-2.5 rounded-2xl text-sm whitespace-nowrap transition-all duration-300 relative group"
          @click="changeCategory('all')">
        <span class="relative z-10">全部</span>
        <div v-if="app_config.current_category_id === 'all' && !app_config.isLikeMode" class="absolute inset-0 rounded-2xl bg-white/10 animate-pulse"></div>
      </button>
      <button
          v-for="category in app_config.categories"
          :key="category.id"
          :class="category.id === app_config.current_category_id && !app_config.isLikeMode
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 scale-105'
                : 'bg-gray-50 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'"
          class="cursor-pointer px-4 py-2.5 rounded-2xl text-sm whitespace-nowrap transition-all duration-300 relative group"
          @click="changeCategory(category.id)">
        <span class="relative z-10">{{ category.category }}</span>
        <div v-if="category.id === app_config.current_category_id && !app_config.isLikeMode" class="absolute inset-0 rounded-2xl bg-white/10 animate-pulse"></div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useAppConfigStore} from "~/store/AppConfigStore";
import {getSentences, getCategories} from "~/utils/Api";
import type {CategoryResponse, sentence} from "~/type";

const app_config = useAppConfigStore()

// 组件挂载时获取分类列表
onMounted(async () => {
  try {
    const categories = await getCategories()
    app_config.categories = categories as CategoryResponse[]
  } catch (error) {
    console.error('获取分类失败:', error)
  }
})

// 改变分类
const changeCategory = (categoryId: string) => {
  app_config.isLikeMode = false
  if (app_config.current_category_id === categoryId) {
    app_config.isRefreshing = false
    return
  }
  app_config.isRefreshing = true
  app_config.current_category_id = categoryId;
  getSentences(app_config.current_category_id, app_config.sentences_count)
      .then(res => {
        app_config.sentences = res as sentence[]
        app_config.isRefreshing = false
      }).catch(() => {
    app_config.isRefreshing = false
  })
}
</script>

<style scoped>

</style>