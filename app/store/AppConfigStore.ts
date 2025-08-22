import {defineStore} from 'pinia'

export const useAppConfigStore = defineStore('appConfigStore', {
    state: () => ({
        dark_mode: true,  // 夜间模式
        sentence_type: 'all',  // 一句话类型
        sentences_count: 5,  // 一句话数量
        sentences: [
            {
                "uuid": "d078dcb9-f010-4f17-a722-7f87c496093c",
                "sentence": "见贤思齐焉，见不贤而内自省也。",
                "category": "诗词",
                "from_source": "论语·里仁篇",
                "from_who": null,
                "length": 15,
                "createdAt": "2023-07-20T19:58:17.000Z",
                "updatedAt": "2023-07-20T19:58:17.000Z"
            }
        ]  // 句子数据
    }),
    actions: {
        // 切换夜间模式
        toggleDarkMode() {
            this.dark_mode = !this.dark_mode
        },
    },
    // 持久化配置
    persist: true,
})
