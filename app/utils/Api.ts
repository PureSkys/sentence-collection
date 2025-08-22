const baseUrl = 'https://api.puresky.top/sentences'

// 获取随机句子
export const getSentences = async (type: string, count: number) => {
    return await $fetch(baseUrl, {
            method: 'GET',
            query: {
                type: type,
                count: count,
            }
        }
    )

}

