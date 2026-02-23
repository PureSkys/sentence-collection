<template>
  <UApp>
    <div :class="app_config.dark_mode ? 'dark' : ''"
         class="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <header>
        <AppHeader></AppHeader>
      </header>

      <main class="container mx-auto px-4 py-10 max-w-7xl">
        <!-- 标题区域 -->
        <div class="mb-10 text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-full mb-5">
            <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 1024 1024">
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="currentColor"/>
            </svg>
            <span class="text-sm font-medium text-indigo-700 dark:text-indigo-300">精选内容库</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400">
            发现精彩句子
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            从文学、诗词、哲学、影视等多种类型中发现精彩句子，保存你喜欢的内容，分享你的感悟。
          </p>
        </div>

        <!-- 控制卡片 -->
        <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-indigo-500/10 p-6 md:p-7 mb-10 border border-white/50 dark:border-gray-700/50">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
            <div class="md:col-span-3">
              <SentenceType></SentenceType>
            </div>
            <SentenceCount></SentenceCount>
          </div>
          <RefreshAndSwitch></RefreshAndSwitch>
        </div>

        <!-- 句子列表 -->
        <section class="mb-20">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <svg class="w-5 h-5 text-white" viewBox="0 0 1024 1024">
                <path d="M187.392 70.656q28.672 0 48.64 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t47.616-19.456l54.272 0zM889.856 70.656q27.648 0 47.616 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t48.64-19.456l437.248 0zM187.392 389.12q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t47.616-19.968l54.272 0zM889.856 389.12q27.648 0 47.616 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t47.616-19.968l437.248 0zM187.392 708.608q28.672 0 48.64 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t47.616-19.968l54.272 0zM889.856 708.608q27.648 0 47.616 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t48.64-19.968l437.248 0z" fill="currentColor"/>
              </svg>
            </div>
            句子列表
            <span v-if="app_config.isLikeMode" class="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 rounded-full text-red-600 dark:text-red-400 text-sm font-medium animate-pulse">
              <svg class="w-4 h-4" viewBox="0 0 1166 1024">
                <path d="M882.058985 2.769416C863.503898 0.969296 845.641165 0 829.024669 0c-115.623117 0-184.166162 42.510535-246.201079 107.868752C512.341954 33.094521 431.751949-11.631547 283.588195 2.769416 158.964476 14.954846 17.170379 124.623718 0 336.345569v69.235399C13.84708 589.470188 142.486451 739.434063 507.495476 999.897634a129.331726 129.331726 0 0 0 150.379287 0c365.285966-261.017455 493.371454-410.981329 507.633946-594.870549v-69.235399C1148.476801 124.623718 1006.682703 14.954846 882.058985 2.769416z" fill="currentColor"/>
              </svg>
              Like Mode
            </span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7">
            <SentenceCard></SentenceCard>
          </div>
        </section>
      </main>

      <footer>
        <AppFooter></AppFooter>
      </footer>

      <!-- 浮动刷新按钮 -->
      <button
        @click="refreshSentences"
        :disabled="app_config.isRefreshing"
        class="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100 disabled:hover:translate-y-0 group"
      >
        <svg
          :class="app_config.isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'"
          class="w-6 h-6 sm:w-7 sm:h-7 text-white"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M896 198.4 896 198.4l0 179.2 0 0c0 19.2-6.4 32-19.2 44.8-12.8 12.8-32 19.2-44.8 19.2l0 0-179.2 0 0 0c-19.2 0-32-6.4-44.8-19.2-25.6-25.6-25.6-64 0-89.6C620.8 320 633.6 313.6 652.8 313.6l0 0 25.6 0C627.2 275.2 576 256 518.4 256 441.6 256 377.6 281.6 332.8 332.8l0 0c-25.6 25.6-64 25.6-89.6 0-25.6-25.6-25.6-64 0-89.6l0 0C313.6 172.8 409.6 128 518.4 128c96 0 185.6 38.4 249.6 96L768 198.4l0 0c0-19.2 6.4-32 19.2-44.8 25.6-25.6 64-25.6 89.6 0C889.6 160 896 179.2 896 198.4zM416 691.2c-12.8 12.8-32 19.2-44.8 19.2l0 0L352 710.4C396.8 748.8 448 768 505.6 768c70.4 0 134.4-25.6 179.2-76.8l0 0c25.6-25.6 64-25.6 89.6 0 25.6 25.6 25.6 64 0 89.6l0 0C710.4 851.2 614.4 896 505.6 896c-96 0-185.6-38.4-249.6-96l0 32 0 0c0 19.2-6.4 32-19.2 44.8-25.6-25.6-64-25.6-89.6 0C134.4 864 128 844.8 128 825.6l0 0 0-179.2 0 0c0-19.2 6.4-32 19.2-44.8C160 588.8 172.8 582.4 192 582.4l0 0 179.2 0 0 0c19.2 0 32 6.4 44.8 19.2C441.6 627.2 441.6 665.6 416 691.2z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </UApp>
</template>
<script lang="ts" setup>
import {useAppConfigStore} from "~/store/AppConfigStore";
import {getSentences, getCategories} from "~/utils/Api";
import type {sentence, CategoryResponse} from "~/type";

const app_config = useAppConfigStore();
const timer = ref<ReturnType<typeof setTimeout> | null>(null);

const refreshSentences = () => {
  app_config.isRefreshing = true;
  app_config.isLikeMode = false;
  if (timer.value) {
    clearTimeout(timer.value);
  }
  timer.value = setTimeout(() => {
    if (app_config.current_category_id) {
      getSentences(app_config.current_category_id, app_config.sentences_count)
        .then((res) => {
          app_config.sentences = res as sentence[];
          app_config.isRefreshing = false;
        })
        .catch(() => {
          app_config.isRefreshing = false;
        });
    } else {
      app_config.isRefreshing = false;
    }
  }, 300);
};

onMounted(async () => {
  // 加载分类
  try {
    const categories = await getCategories()
    app_config.categories = categories as CategoryResponse[]
  } catch (error) {
    console.error('获取分类失败:', error)
  }

  // 加载句子
  if (app_config.sentences.length <= 0 && app_config.current_category_id) {
    try {
      const res = await getSentences(app_config.current_category_id, app_config.sentences_count)
      app_config.sentences = res as sentence[]
    } catch (error) {
      console.error('获取句子失败:', error)
    }
  }
  app_config.isRefreshing = false;
})
</script>