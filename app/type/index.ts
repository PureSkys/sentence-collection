export type SentenceResponse = {
    id: string,
    is_disabled: boolean,
    content: string,
    from_source?: string,
    from_who?: string,
    likes: number,
    created_at: string,
    updated_at: string,
    category_id: string,
}

export type CategoryResponse = {
    id: string,
    category: string,
    description?: string,
    created_at: string,
    updated_at: string,
}

export type sentence = SentenceResponse