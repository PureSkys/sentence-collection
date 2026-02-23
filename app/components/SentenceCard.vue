<template>
  <div
    v-for="item in app_config.sentences"
    :key="item.id"
    class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-800"
  >
    <div v-if="app_config.isRefreshing" class="p-6">
      <div class="flex items-center gap-4 mb-4">
        <USkeleton class="w-8 h-8 rounded-full" />
        <USkeleton class="h-4 w-24" />
      </div>
      <div class="space-y-3">
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-3/4" />
      </div>
    </div>
    <div v-else class="p-6 flex flex-col h-full">
      <div class="flex justify-between items-start mb-5">
        <span class="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/50">
          {{ getCategoryName(item.category_id) }}
        </span>
        <div class="flex items-center gap-1">
          <button
            :title="item.likes"
            @click="touchLike(item, item.id)"
            class="flex items-center gap-1.5 p-2 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
          >
            <svg
              v-if="!checkIdExists(item.id)"
              class="w-5 h-5 text-gray-400 transition-colors duration-200 hover:text-red-400"
              viewBox="0 0 1166 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M882.058985 2.769416C863.503898 0.969296 845.641165 0 829.024669 0c-115.623117 0-184.166162 42.510535-246.201079 107.868752C512.341954 33.094521 431.751949-11.631547 283.588195 2.769416 158.964476 14.954846 17.170379 124.623718 0 336.345569v69.235399C13.84708 589.470188 142.486451 739.434063 507.495476 999.897634a129.331726 129.331726 0 0 0 150.379287 0c365.285966-261.017455 493.371454-410.981329 507.633946-594.870549v-69.235399C1148.476801 124.623718 1006.682703 14.954846 882.058985 2.769416z m189.843464 339.253456v57.465381C1059.301607 550.006011 941.601428 682.245623 603.59421 923.046341a35.725466 35.725466 0 0 1-41.54124 0C224.738106 682.384094 106.345573 550.006011 93.74473 399.488253V342.022872c13.84708-156.887414 112.438288-237.477419 198.982538-245.924138 15.370259-1.523179 30.186634-2.215533 43.895243-2.215533 96.929559 0 143.455747 35.448524 210.337142 115.069234l35.863937 42.787476 36.002408-42.787476c66.742925-79.620709 112.992171-115.069233 210.198671-115.069234 13.84708 0 28.524984 0 43.895243 2.215533 86.544249 8.446719 185.55087 89.036723 198.982537 245.924138z"
                fill="currentColor"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-red-500 transition-colors duration-200"
              viewBox="0 0 1166 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M882.058985 2.769416C863.503898 0.969296 845.641165 0 829.024669 0c-115.623117 0-184.166162 42.510535-246.201079 107.868752C512.341954 33.094521 431.751949-11.631547 283.588195 2.769416 158.964476 14.954846 17.170379 124.623718 0 336.345569v69.235399C13.84708 589.470188 142.486451 739.434063 507.495476 999.897634a129.331726 129.331726 0 0 0 150.379287 0c365.285966-261.017455 493.371454-410.981329 507.633946-594.870549v-69.235399C1148.476801 124.623718 1006.682703 14.954846 882.058985 2.769416z"
                fill="currentColor"
              />
            </svg>
            <span :class="checkIdExists(item.id) ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'" class="text-sm font-medium transition-colors duration-200">
              {{ item.likes }}
            </span>
          </button>
          <button
            @click="copy(item.content)"
            class="p-2 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
          >
            <svg
              class="w-5 h-5 text-gray-400 transition-colors duration-200 hover:text-indigo-500"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M789.330818 643.218554c-47.517223 0-90.109274 20.977777-119.110795 54.141084L386.844024 540.252461c3.855818-13.588483 5.972015-27.906583 6.022157-42.717917l282.563494-165.220972c28.77844 29.861098 69.155033 48.466851 113.902166 48.466851 87.379093 0 158.213371-70.835302 158.213371-158.213371 0-87.377046-70.835302-158.212348-158.213371-158.212348-87.37807 0-158.212348 70.836325-158.212348 158.212348 0 1.689479 0.073678 3.359514 0.12689 5.034666l-279.240819 163.278737c-28.950356-31.990598-70.794369-52.094472-117.338429-52.094472-87.37807 0-158.212348 70.834278-158.212348 158.213371 0 87.377046 70.835302 158.213371 158.212348 158.213371 30.777981 0 59.483766-8.81783 83.784218-24.02416l312.746934 173.392072c1.683339 85.919858 71.811536 155.064658 158.133553 155.064658 87.379093 0 158.213371-70.836325 158.213371-158.212348C947.545212 714.051809 876.709911 643.218554 789.330818 643.218554z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <blockquote class="flex-1 flex flex-col">
        <p class="text-lg leading-relaxed text-gray-800 dark:text-gray-100 mb-5 font-serif line-clamp-6">
          {{ item.content }}
        </p>
        <div v-if="item.from_who || item.from_source" class="flex justify-end mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
          <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">
            ——
            <template v-if="item.from_who">{{ item.from_who }}</template>
            <template v-if="item.from_source">《{{ item.from_source }}》</template>
          </span>
        </div>
      </blockquote>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppConfigStore } from "~/store/AppConfigStore";
import { likeSentence, unlikeSentence } from "~/utils/Api";
import type { sentence } from "~/type";

const app_config = useAppConfigStore();
const timer = ref<ReturnType<typeof setTimeout> | null>(null);
const toast = useToast();

const getCategoryName = (categoryId: string) => {
  const category = app_config.categories.find((c) => c.id === categoryId);
  return category ? category.category : "未知";
};

const copy = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    toast.add({
      title: "复制成功",
      description: text,
      color: "success",
    });
  } catch (err) {
    toast.add({
      title: "复制失败",
      description: "请手动复制",
      color: "error",
    });
  }
};

const checkIdExists = (id: string) => {
  return app_config.like_sentences_uuid.some((item) => item === id);
};

const touchLike = async (item: sentence, id: string) => {
  if (timer.value) {
    clearTimeout(timer.value);
  }
  timer.value = setTimeout(() => {
    if (checkIdExists(id)) {
      unlikeSentence(id);
      app_config.like_sentences_uuid = app_config.like_sentences_uuid.filter(
        (item) => item !== id
      );
      item.likes = item.likes - 1;
      toast.add({
        title: "取消点赞",
        color: "info",
      });
    } else {
      likeSentence(id);
      app_config.like_sentences_uuid.push(id);
      item.likes = item.likes + 1;
      toast.add({
        title: "点赞成功",
        color: "success",
      });
    }
  }, 300);
};
</script>
