export interface SearchState {
    searchPhrase: string

    result: SearchResult | null
}

export interface SearchResult {
    questionIds: number[]
}
