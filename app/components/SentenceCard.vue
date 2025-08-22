<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
        style="opacity: 1; transform: none;">
      <div class="p-5">
        <div class="flex justify-between items-start mb-3"><span
            class="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full">原创</span>
          <div class="flex space-x-2">
            <button
                class="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-70"
                aria-label="分享句子"><i class="fa-solid fa-share-alt text-gray-500 dark:text-gray-400">
              <svg t="1755836357844" class="icon" viewBox="0 0 1056 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="14032" width="16" height="16">
                <path
                    d="M783.17881813 677.86924437a156.45447562 156.45447562 0 0 0-110.44674 45.45597094L465.83227531 603.862415a200.37255094 200.37255094 0 0 0-8.21776406-183.04480969l212.5818-122.74990594a156.45447562 156.45447562 0 1 0-32.02579781-48.55524187L421.22155906 374.7042125a199.40989875 199.40989875 0 0 0-137.35404468-54.65986594C173.27989812 320.04434656 83.58888031 409.73536438 83.58888031 520.27602125a200.23167469 200.23167469 0 0 0 350.59326563 132.2355525l205.44408562 118.57058625a157.08841688 157.08841688 0 1 0 143.50562813-93.259875z m-1e-8 1e-8"
                    p-id="14033" fill="#707070"></path>
              </svg>
            </i>
            </button>
          </div>
        </div>
        <blockquote class="text-gray-800 dark:text-gray-200 mb-4 italic">"乐得浮生半日闲，一杯酒前细烟点。"
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>