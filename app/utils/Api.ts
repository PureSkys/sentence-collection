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

// 点赞句子
export const likeSentence = async (uuid: string) => {
    return await $fetch(baseUrl + '/like', {
        method: 'POST',
        body: {
            uuid: uuid,
        }
    })
}

// 取消点赞句子
export const unlikeSentence = async (uuid: string) => {
    return await $fetch(baseUrl + '/unlike', {
        method: 'POST',
        body: {
            uuid: uuid,
        }
    })
}

