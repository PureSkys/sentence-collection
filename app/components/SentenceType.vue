<template>
  <div class="w-full mb-4">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">内容类型</label>
    <div class="flex md:flex items-center space-x-2 overflow-x-auto pb-2">
      <button
          v-for="(type, key) in SENTENCE_TYPES"
          :key="key"
          :class="key === app_config.sentence_type
                ? 'bg-indigo-600 text-white font-medium shadow-md'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
          class="cursor-pointer px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300"
          @click="changeType(key)">
        {{ type }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 一句话参数类型
import {useAppConfigStore} from "~/store/AppConfigStore";
import {getSentences} from "~/utils/Api";

const SENTENCE_TYPES = {
  all: '全部',
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
};
const app_config = useAppConfigStore()  // 获取应用配置仓库

// 改变类型
const changeType = (key: string) => {
  app_config.sentence_type = key;
  getSentences(app_config.sentence_type, app_config.sentences_count)
      .then(res => {
        app_config.sentences = res as []
      });
}
</script>

<style scoped>

</style>