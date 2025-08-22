<template>
  <div class="w-full mb-4">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">内容类型</label>
    <div class="hidden md:flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
          v-for="(type, key) in SENTENCE_TYPES"
          @click="changeType(key)"
          :key="key"
          class="cursor-pointer px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300"
          :class="key === sentence_type
                ? 'bg-indigo-600 text-white font-medium shadow-md'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'">
        {{ type }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 一句话参数类型
const SENTENCE_TYPES = {
  a: '动画',
  b: '漫画',
  c: '游戏',
  d: '文学',
  e: '原创',
  f: '网络',
  g: '其他',
  h: '影视',
  i: '诗词',
  j: '网易云',
  k: '哲学',
  l: '抖机灵',
  all: '全部',
};
let sentence_type = ref('all');  // 一句话类型

// 改变类型
const changeType = (key: string) => {
  sentence_type.value = key;
}
</script>

<style scoped>

</style>