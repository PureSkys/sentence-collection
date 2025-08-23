import {defineStore} from 'pinia'
import type {sentence} from "~/type";

export const useAppConfigStore = defineStore('appConfigStore', {
    state: () => ({
        dark_mode: true,  // 夜间模式
        sentence_type: 'all',  // 一句话类型
        sentences_count: 5,  // 一句话数量
        sentences: [] as sentence[],  // 句子数据
        isRefreshing: false,  // 刷新中
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
