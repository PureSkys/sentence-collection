<template>
  <div v-for="item in app_config.sentences" :key="item.uuid"
       class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
       style="opacity: 1; transform: none;">
    <div class="p-5">
      <div class="flex justify-between items-start mb-3"><span
          class="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full">
          {{ item.category }}
        </span>
        <div class="flex space-x-2">
          <button
              @click="copy(item.sentence)"
              class="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-70"
          >
            <svg t="1755868018039" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="13692" width="18" height="18">
              <path
                  d="M789.330818 643.218554c-47.517223 0-90.109274 20.977777-119.110795 54.141084L386.844024 540.252461c3.855818-13.588483 5.972015-27.906583 6.022157-42.717917l282.563494-165.220972c28.77844 29.861098 69.155033 48.466851 113.902166 48.466851 87.379093 0 158.213371-70.835302 158.213371-158.213371 0-87.377046-70.835302-158.212348-158.213371-158.212348-87.37807 0-158.212348 70.836325-158.212348 158.212348 0 1.689479 0.073678 3.359514 0.12689 5.034666l-279.240819 163.278737c-28.950356-31.990598-70.794369-52.094472-117.338429-52.094472-87.37807 0-158.212348 70.834278-158.212348 158.213371 0 87.377046 70.835302 158.213371 158.212348 158.213371 30.777981 0 59.483766-8.81783 83.784218-24.02416l312.746934 173.392072c1.683339 85.919858 71.811536 155.064658 158.133553 155.064658 87.379093 0 158.213371-70.836325 158.213371-158.212348C947.545212 714.051809 876.709911 643.218554 789.330818 643.218554z"
                  p-id="13693" fill="#707070"></path>
            </svg>
          </button>
        </div>
      </div>
      <blockquote class="text-gray-800 dark:text-gray-200 mb-4 italic">
        {{ item.sentence }}
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAppConfigStore} from "~/store/AppConfigStore";

const app_config = useAppConfigStore()  // 获取应用配置仓库
const toast = useToast()
// 复制文本
const copy = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    toast.add({
      title: '复制成功',
      description: text,
      color: 'success'
    })
  } catch (err) {
    toast.add({
      title: '复制失败',
      description: '请手动复制',
      color: 'error'
    })
  }
}
</script>

<style scoped>

</style>