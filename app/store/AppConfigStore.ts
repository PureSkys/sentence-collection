import {defineStore} from 'pinia'
import type {sentence, CategoryResponse} from "~/type";

export const useAppConfigStore = defineStore('appConfigStore', {
    state: () => ({
        dark_mode: true,  // 夜间模式
        categories: [] as CategoryResponse[],  // 分类列表
        current_category_id: '' as string,  // 当前选中分类ID
        sentences_count: 5,  // 一句话数量
        sentences: [] as sentence[],  // 句子数据
        isRefreshing: false,  // 刷新中
        isLikeMode: false,  // 喜欢模式
        like_sentences_uuid: [] as string[],  // 喜欢的句子
    }),
    actions: {
        // 切换夜间模式
        toggleDarkMode() {
            this.dark_mode = !this.dark_mode
        },
    },
    // 持久化配置
    persist: {
        storage: localStorage,
    },
})
