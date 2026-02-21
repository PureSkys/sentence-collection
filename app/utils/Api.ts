import type {CategoryResponse, sentence} from "~/type";

export const useApi = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.public.apiBaseUrl

    const getCategories = async (): Promise<CategoryResponse[]> => {
        return await $fetch(`${baseUrl}/sentence/category`, {
            method: 'GET',
        })
    }

    const getSentences = async (categoryId: string, limit?: number): Promise<sentence[]> => {
        return await $fetch(`${baseUrl}/sentence/${categoryId}`, {
            method: 'GET',
            query: limit ? { limit } : {},
        })
    }

    const getSentencesByIds = async (ids: string[]): Promise<sentence[]> => {
        return await $fetch(`${baseUrl}/sentence/by-ids`, {
            method: 'POST',
            body: {
                ids: ids,
            }
        })
    }

    const likeSentence = async (sentenceId: string): Promise<void> => {
        return await $fetch(`${baseUrl}/sentence/like/${sentenceId}`, {
            method: 'POST',
        })
    }

    const unlikeSentence = async (sentenceId: string): Promise<void> => {
        return await $fetch(`${baseUrl}/sentence/unlike/${sentenceId}`, {
            method: 'POST',
        })
    }

    return {
        getCategories,
        getSentences,
        getSentencesByIds,
        likeSentence,
        unlikeSentence
    }
}

export const getCategories = () => useApi().getCategories()
export const getSentences = (categoryId: string, limit?: number) => useApi().getSentences(categoryId, limit)
export const getSentencesByIds = (ids: string[]) => useApi().getSentencesByIds(ids)
export const likeSentence = (sentenceId: string) => useApi().likeSentence(sentenceId)
export const unlikeSentence = (sentenceId: string) => useApi().unlikeSentence(sentenceId)

