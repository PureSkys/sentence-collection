<template>
  <div class="w-full md:w-48 mb-4">
    <label
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">获取数量</label>
    <div class="flex items-center border rounded-lg overflow-hidden border-gray-200">
      <button type="button"
              class="cursor-pointer flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              tabindex="0"><span class="text-2xl font-medium text-gray-600 dark:text-gray-400">-</span>
      </button>
      <input type="text"
             class="flex-6 w-full text-center border-gray-200 py-2 border-x focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white"
             aria-label="数量选择" value="5">
      <button type="button"
              class="cursor-pointer flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              tabindex="0"><span class="text-2xl font-medium text-gray-600 dark:text-gray-400">+</span>
      </button>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">最多 15 条</p></div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>