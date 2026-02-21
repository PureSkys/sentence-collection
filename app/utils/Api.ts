const baseUrl = 'http://127.0.0.1:8000'

// 获取分类列表
export const getCategories = async () => {
    return await $fetch(`${baseUrl}/sentence/category`, {
        method: 'GET',
    })
}

// 获取句子列表 (根据category_id)
export const getSentences = async (categoryId: string, limit?: number) => {
    return await $fetch(`${baseUrl}/sentence/${categoryId}`, {
        method: 'GET',
        query: limit ? { limit } : {},
    })
}

// 根据ID数组获取句子
export const getSentencesByIds = async (ids: string[]) => {
    return await $fetch(`${baseUrl}/sentence/by-ids`, {
        method: 'POST',
        body: {
            ids: ids,
        }
    })
}

// 点赞句子
export const likeSentence = async (sentenceId: string) => {
    return await $fetch(`${baseUrl}/sentence/like/${sentenceId}`, {
        method: 'POST',
    })
}

// 取消点赞句子
export const unlikeSentence = async (sentenceId: string) => {
    return await $fetch(`${baseUrl}/sentence/unlike/${sentenceId}`, {
        method: 'POST',
    })
}

