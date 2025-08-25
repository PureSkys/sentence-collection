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
// uuids查询句子
export const getSentencesByUuids = async (uuids: string[]) => {
    return await $fetch(baseUrl + '/by-uuids', {
        method: 'POST',
        body: {
            uuids: uuids,
        }
    })
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

