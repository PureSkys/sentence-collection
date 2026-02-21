<template>
  <div class="w-full mb-4">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">内容类型</label>
    <div class="flex md:flex items-center space-x-2 overflow-x-auto pb-2">
      <button
          v-for="category in app_config.categories"
          :key="category.id"
          :class="category.id === app_config.current_category_id && !app_config.isLikeMode
                ? 'bg-indigo-600 text-white font-medium shadow-md'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
          class="cursor-pointer px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300"
          @click="changeCategory(category.id)">
        {{ category.category }}
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
    if (app_config.categories.length > 0 && !app_config.current_category_id) {
      app_config.current_category_id = app_config.categories[0].id
    }
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