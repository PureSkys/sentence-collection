<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <svg t="1755832599335" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3036" width="16" height="16">
            <path
                d="M117.555 546.16L287.703 546.16000001c-39.506 239.228-209.306 283.505-219.197 285.88099999-47.227 10.38299999-77.394 56.873-67.462 104.325 9.974 47.69799999 56.771 78.213 104.49 68.321 9.99400001-2.089 100.29-22.773 189.706-104.018 77.455-70.39 168.94-201.523 176.558-429.24 0.225-2.478 0.737-4.874 0.737-7.393l0-329.011c0-64.922-52.634-117.556-117.555-117.556l-237.425 0c-64.921 0-117.555 52.634-117.555 117.556l0 293.58c0 64.922 52.634 117.556 117.555 117.556z m551.465 0L839.168 546.16c-39.506 239.228-209.306 283.505-219.197 285.881-47.227 10.38299999-77.394 56.873-67.46200001 104.325C562.483 984.064 609.28 1014.57999999 657 1004.687c9.99400001-2.089 100.29-22.773 189.706-104.018C924.16 830.28 1015.645 699.146 1023.263 471.43 1023.488 468.951 1024 466.555 1024 464.015l0-329.01c0-64.922-52.634-117.556-117.555-117.556L669.02 17.449c-64.921 0-117.555 52.634-117.555 117.555L551.465 428.605c0 64.922 52.634 117.556 117.555 117.556z"
                fill="#4f46e5" p-id="3037"></path>
          </svg>
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">
            句子集
          </h1>
        </div>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8 max-w-6xl">
      <!--      标题开始-->
      <div class="mb-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">发现精彩句子</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          从动画、漫画、游戏、文学等多种类型中发现精彩句子，保存你喜欢的内容，分享你的感悟。</p>
      </div>
      <!--      标题结束-->
      <!--      中间部分卡片开始-->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 mb-8 border border-gray-100 dark:border-gray-700">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <!--        内容类型部分开始-->
          <div class="md:col-span-3">
            <div class="w-full mb-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">内容类型</label>
              <div class="hidden md:flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                <button
                    class="px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    tabindex="0" style="transform: none;">动画
                </button>
              </div>
            </div>
          </div>
          <!--          类容类型结束-->
          <!--          获取数量组件开始-->
          <div>
            <div class="w-full md:w-48 mb-4"><label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">获取数量</label>
              <div class="flex items-center border rounded-lg overflow-hidden border-gray-200">
                <button type="button"
                        class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        tabindex="0"><span class="text-2xl font-medium text-gray-600 dark:text-gray-400">-</span>
                </button>
                <input type="text"
                       class="flex-6 w-full text-center border-gray-200 py-2 border-x focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-900 dark:text-white"
                       aria-label="数量选择" value="5">
                <button type="button"
                        class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        tabindex="0"><span class="text-2xl font-medium text-gray-600 dark:text-gray-400">+</span>
                </button>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">最多 15 条</p></div>
          </div>
          <!--          获取数量组件结束-->
        </div>
        <!--        刷新句子行开始-->
        <div class="flex flex-wrap items-center justify-between gap-4">
          <button
              class="px-6 py-2.5 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
              tabindex="0">
            <svg t="1755834920315" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="5843" width="18" height="18">
              <path
                  d="M896 198.4 896 198.4l0 179.2 0 0c0 19.2-6.4 32-19.2 44.8-12.8 12.8-32 19.2-44.8 19.2l0 0-179.2 0 0 0c-19.2 0-32-6.4-44.8-19.2-25.6-25.6-25.6-64 0-89.6C620.8 320 633.6 313.6 652.8 313.6l0 0 25.6 0C627.2 275.2 576 256 518.4 256 441.6 256 377.6 281.6 332.8 332.8l0 0c-25.6 25.6-64 25.6-89.6 0-25.6-25.6-25.6-64 0-89.6l0 0C313.6 172.8 409.6 128 518.4 128c96 0 185.6 38.4 249.6 96L768 198.4l0 0c0-19.2 6.4-32 19.2-44.8 25.6-25.6 64-25.6 89.6 0C889.6 160 896 179.2 896 198.4zM416 691.2c-12.8 12.8-32 19.2-44.8 19.2l0 0L352 710.4C396.8 748.8 448 768 505.6 768c70.4 0 134.4-25.6 179.2-76.8l0 0c25.6-25.6 64-25.6 89.6 0 25.6 25.6 25.6 64 0 89.6l0 0C710.4 851.2 614.4 896 505.6 896c-96 0-185.6-38.4-249.6-96l0 32 0 0c0 19.2-6.4 32-19.2 44.8-25.6 25.6-64 25.6-89.6 0C134.4 864 128 844.8 128 825.6l0 0 0-179.2 0 0c0-19.2 6.4-32 19.2-44.8C160 588.8 172.8 582.4 192 582.4l0 0 179.2 0 0 0c19.2 0 32 6.4 44.8 19.2C441.6 627.2 441.6 665.6 416 691.2z"
                  p-id="5844" fill="#ffffff"></path>
            </svg>
            <span class="mx-1">
              刷新句子
            </span>
          </button>
          <button
              class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="切换到深色模式">
            <svg t="1755835644404" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="8110" width="16" height="16">
              <path
                  d="M535.704842 0.069859C809.532205 17.179695 1023.99014 240.757542 1023.99014 511.504935c0 283.057274-233.63775 512.495065-521.884975 512.495065C270.597394 1024 66.729357 874.251442 1.329987 656.153542a31.649695 31.649695 0 0 1 8.929914-32.349689 33.059682 33.059682 0 0 1 33.409679-6.799934 396.566182 396.566182 0 0 0 132.658722 22.639782c215.927921 0 390.996235-171.908345 390.996235-383.996303a376.99637 376.99637 0 0 0-61.169411-206.378012 31.539696 31.539696 0 0 1-0.599994-33.509678A32.779684 32.779684 0 0 1 535.704842 0.069859z m0 0"
                  p-id="8111" fill="#515151"></path>
            </svg>
            <svg t="1755835696246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="10217" width="16" height="16">
              <path
                  d="M181.6 512.01c0-26.07-21.13-47.2-47.2-47.2H87.2c-26.07 0-47.2 21.13-47.2 47.2 0 26.07 21.13 47.2 47.2 47.2h47.2c26.07 0 47.2-21.13 47.2-47.2z m30.2 236l-33.51 33.51c-18.3 18.41-18.3 48.14 0 66.55 18.41 18.3 48.14 18.3 66.55 0l33.51-33.51c16.96-19.8 14.65-49.59-5.15-66.55-17.66-15.14-43.73-15.14-61.4 0z m300.19-566.39c26.07 0 47.2-21.13 47.2-47.2v-47.2c0.01-26.07-21.11-47.21-47.18-47.22-26.07-0.01-47.21 21.11-47.22 47.18v47.24c0 26.07 21.13 47.2 47.2 47.2z m267.15 110.44a47.194 47.194 0 0 0 33.04-13.69l33.51-33.51c19.8-16.96 22.1-46.75 5.15-66.55-16.96-19.8-46.75-22.1-66.55-5.15-1.85 1.58-3.57 3.3-5.15 5.15l-31.15 33.51c-18.3 18.41-18.3 48.14 0 66.55a47.166 47.166 0 0 0 31.15 13.69z m-566.39-13.68c18.61 18.25 48.5 17.95 66.75-0.66a47.211 47.211 0 0 0 13.49-32.64 47.2 47.2 0 0 0-13.69-33.24l-33.51-33.51c-18.72-18.3-48.73-17.96-67.03 0.76-17.83 18.24-18.03 47.31-0.46 65.79l34.45 33.5z m724.03 186.43h-47.2c-26.07 0-47.2 21.13-47.2 47.2 0 26.07 21.13 47.2 47.2 47.2h47.2c26.07 0.01 47.21-21.11 47.22-47.18s-21.11-47.21-47.18-47.22h-0.04zM835.24 768.03c-15.37-13.35-32.43-28.32-52.59-25.55-20.86 2.96-37.23 19.39-40.12 40.25-2.83 20.03 12.74 36.75 27.04 51.04l11.93 11.93c18.41 18.3 48.14 18.3 66.55 0 18.3-18.41 18.3-48.14 0-66.55l-12.81-11.12zM511.99 252.42c-143.37 0-259.59 116.22-259.59 259.59S368.62 771.6 511.99 771.6s259.59-116.22 259.59-259.59c-0.26-143.26-116.33-259.33-259.59-259.59z m0 589.98c-26.07 0-47.2 21.13-47.2 47.2v47.2c0 26.07 21.13 47.2 47.2 47.2 26.07 0 47.2-21.13 47.2-47.2v-47.2c0-26.07-21.13-47.2-47.2-47.2z"
                  fill="#FFB92F" p-id="10218"></path>
            </svg>
          </button>
        </div>
        <!--        刷新句子行结束-->
        <div class="flex flex-wrap items-center justify-between gap-4"></div>
      </div>
      <!--      中间卡片结束-->
      <!--      句子列表开始-->
      <section class="mb-16">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <i class="mr-2">
            <svg t="1755836126774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="11674" width="20" height="20">
              <path
                  d="M187.392 70.656q28.672 0 48.64 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t47.616-19.456l54.272 0zM889.856 70.656q27.648 0 47.616 19.456t19.968 48.128l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.128t48.64-19.456l437.248 0zM187.392 389.12q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t47.616-19.968l54.272 0zM889.856 389.12q27.648 0 47.616 19.968t19.968 48.64l0 52.224q0 27.648-19.968 47.616t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-47.616l0-52.224q0-28.672 19.968-48.64t48.64-19.968l437.248 0zM187.392 708.608q28.672 0 48.64 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-54.272 0q-27.648 0-47.616-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t47.616-19.968l54.272 0zM889.856 708.608q27.648 0 47.616 19.968t19.968 47.616l0 52.224q0 28.672-19.968 48.64t-47.616 19.968l-437.248 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-27.648 19.968-47.616t48.64-19.968l437.248 0z"
                  p-id="11675" fill="#4f46e5"></path>
            </svg>
          </i>
          句子列表
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
              class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
              style="opacity: 1; transform: none;">
            <div class="p-5">
              <div class="flex justify-between items-start mb-3"><span
                  class="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full">原创</span>
                <div class="flex space-x-2">
                  <button
                      class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-70"
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
      </section>
      <!--      句子列表结束-->
    </main>
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div class="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm"><p>句子集 © 2025 |
        探索语言之美</p>
        <p class="mt-1">数据来源于网络API，仅供学习使用</p></div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>