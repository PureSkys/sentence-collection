export const useAppConfigStore = defineStore('appConfigStore', {
    state: () => ({
        dark_mode: true  // 夜间模式
    }),
    actions: {
        // 切换夜间模式
        toggleDarkMode() {
            this.dark_mode = !this.dark_mode
        }
    }
})
