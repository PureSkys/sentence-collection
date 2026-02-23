<template>
  <div class="flex flex-wrap items-center justify-between gap-4">
    <button
      class="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      tabindex="0"
      @click="refreshSentences"
      :disabled="app_config.isRefreshing"
    >
      <svg
        :class="app_config.isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'"
        class="w-5 h-5"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M896 198.4 896 198.4l0 179.2 0 0c0 19.2-6.4 32-19.2 44.8-12.8 12.8-32 19.2-44.8 19.2l0 0-179.2 0 0 0c-19.2 0-32-6.4-44.8-19.2-25.6-25.6-25.6-64 0-89.6C620.8 320 633.6 313.6 652.8 313.6l0 0 25.6 0C627.2 275.2 576 256 518.4 256 441.6 256 377.6 281.6 332.8 332.8l0 0c-25.6 25.6-64 25.6-89.6 0-25.6-25.6-25.6-64 0-89.6l0 0C313.6 172.8 409.6 128 518.4 128c96 0 185.6 38.4 249.6 96L768 198.4l0 0c0-19.2 6.4-32 19.2-44.8 25.6-25.6 64-25.6 89.6 0C889.6 160 896 179.2 896 198.4zM416 691.2c-12.8 12.8-32 19.2-44.8 19.2l0 0L352 710.4C396.8 748.8 448 768 505.6 768c70.4 0 134.4-25.6 179.2-76.8l0 0c25.6-25.6 64-25.6 89.6 0 25.6 25.6 25.6 64 0 89.6l0 0C710.4 851.2 614.4 896 505.6 896c-96 0-185.6-38.4-249.6-96l0 32 0 0c0 19.2-6.4 32-19.2 44.8-25.6-25.6-64-25.6-89.6 0C134.4 864 128 844.8 128 825.6l0 0 0-179.2 0 0c0-19.2 6.4-32 19.2-44.8C160 588.8 172.8 582.4 192 582.4l0 0 179.2 0 0 0c19.2 0 32 6.4 44.8 19.2C441.6 627.2 441.6 665.6 416 691.2z"
          fill="currentColor"
        />
      </svg>
      <span class="transition-all duration-300">
        {{ app_config.isRefreshing ? '刷新中...' : '刷新句子' }}
      </span>
    </button>
    <div class="flex items-center gap-2">
      <button
        @click="getLikeSentence(app_config.like_sentences_uuid)"
        class="relative inline-flex items-center gap-2 p-3 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
      >
        <svg
          class="w-5 h-5 transition-all duration-300"
          :class="app_config.isLikeMode ? 'text-red-500 scale-110' : 'text-gray-400 group-hover:text-red-400'"
          viewBox="0 0 1166 1024"
        >
          <path
            d="M882.058985 2.769416C863.503898 0.969296 845.641165 0 829.024669 0c-115.623117 0-184.166162 42.510535-246.201079 107.868752C512.341954 33.094521 431.751949-11.631547 283.588195 2.769416 158.964476 14.954846 17.170379 124.623718 0 336.345569v69.235399C13.84708 589.470188 142.486451 739.434063 507.495476 999.897634a129.331726 129.331726 0 0 0 150.379287 0c365.285966-261.017455 493.371454-410.981329 507.633946-594.870549v-69.235399C1148.476801 124.623718 1006.682703 14.954846 882.058985 2.769416z"
            fill="currentColor"
          />
        </svg>
        <span
          class="text-sm font-medium transition-all duration-300"
          :class="app_config.isLikeMode ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'"
        >
          {{ app_config.like_sentences_uuid.length }}
        </span>
      </button>
      <button
        class="p-3 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        @click="app_config.toggleDarkMode"
      >
        <svg
          v-if="!app_config.dark_mode"
          class="w-5 h-5 text-gray-600 dark:text-gray-300"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M535.704842 0.069859C809.532205 17.179695 1023.99014 240.757542 1023.99014 511.504935c0 283.057274-233.63775 512.495065-521.884975 512.495065C270.597394 1024 66.729357 874.251442 1.329987 656.153542a31.649695 31.649695 0 0 1 8.929914-32.349689 33.059682 33.059682 0 0 1 33.409679-6.799934 396.566182 396.566182 0 0 0 132.658722 22.639782c215.927921 0 390.996235-171.908345 390.996235-383.996303a376.99637 376.99637 0 0 0-61.169411-206.378012 31.539696 31.539696 0 0 1-0.599994-33.509678A32.779684 32.779684 0 0 1 535.704842 0.069859z"
            fill="currentColor"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5 text-amber-400"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M181.6 512.01c0-26.07-21.13-47.2-47.2-47.2H87.2c-26.07 0-47.2 21.13-47.2 47.2 0 26.07 21.13 47.2 47.2 47.2h47.2c26.07 0 47.2-21.13 47.2-47.2z m30.2 236l-33.51 33.51c-18.3 18.41-18.3 48.14 0 66.55 18.41 18.3 48.14 18.3 66.55 0l33.51-33.51c16.96-19.8 14.65-49.59-5.15-66.55-17.66-15.14-43.73-15.14-61.4 0z m300.19-566.39c26.07 0 47.2-21.13 47.2-47.2v-47.2c0.01-26.07-21.11-47.21-47.18-47.22-26.07-0.01-47.21 21.11-47.22 47.18v47.24c0 26.07 21.13 47.2 47.2 47.2z m267.15 110.44a47.194 47.194 0 0 0 33.04-13.69l33.51-33.51c19.8-16.96 22.1-46.75 5.15-66.55-16.96-19.8-46.75-22.1-66.55-5.15-1.85 1.58-3.57 3.3-5.15 5.15l-31.15 33.51c-18.3 18.41-18.3 48.14 0 66.55a47.166 47.166 0 0 0 31.15 13.69z m-566.39-13.68c18.61 18.25 48.5 17.95 66.75-0.66a47.211 47.211 0 0 0 13.49-32.64 47.2 47.2 0 0 0-13.69-33.24l-33.51-33.51c-18.72-18.3-48.73-17.96-67.03 0.76-17.83 18.24-18.03 47.31-0.46 65.79l34.45 33.5z m724.03 186.43h-47.2c-26.07 0-47.2 21.13-47.2 47.2 0 26.07 21.13 47.2 47.2 47.2h47.2c26.07 0.01 47.21-21.11 47.22-47.18s-21.11-47.21-47.18-47.22h-0.04zM835.24 768.03c-15.37-13.35-32.43-28.32-52.59-25.55-20.86 2.96-37.23 19.39-40.12 40.25-2.83 20.03 12.74 36.75 27.04 51.04l11.93 11.93c18.41 18.3 48.14 18.3 66.55 0 18.3-18.41 18.3-48.14 0-66.55l-12.81-11.12zM511.99 252.42c-143.37 0-259.59 116.22-259.59 259.59S368.62 771.6 511.99 771.6s259.59-116.22 259.59-259.59c-0.26-143.26-116.33-259.33-259.59-259.59z m0 589.98c-26.07 0-47.2 21.13-47.2 47.2v47.2c0 26.07 21.13 47.2 47.2 47.2 26.07 0 47.2-21.13 47.2-47.2v-47.2c0-26.07-21.13-47.2-47.2-47.2z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppConfigStore } from "~/store/AppConfigStore";
import { getSentences, getSentencesByIds } from "~/utils/Api";
import type { sentence } from "~/type";

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

const getLikeSentence = async (uuids: string[]) => {
  app_config.isRefreshing = true;
  if (timer.value) {
    clearTimeout(timer.value);
  }
  timer.value = setTimeout(() => {
    app_config.isLikeMode = !app_config.isLikeMode;
    if (app_config.isLikeMode === true) {
      if (uuids.length > 0) {
        getSentencesByIds(uuids)
          .then((res) => {
            app_config.sentences = res as sentence[];
            app_config.isRefreshing = false;
          })
          .catch(() => {
            app_config.isRefreshing = false;
          });
      } else {
        app_config.sentences = [];
        app_config.isRefreshing = false;
      }
    } else {
      refreshSentences();
    }
  }, 200);
};
</script>
