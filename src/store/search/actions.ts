import {ActionType, createAction} from 'typesafe-actions'

export const searchActions =  {
    setSearchPhrase: createAction('SEARCH/SET-SEARCH-PHRASE')<{ searchPhrase: string }>(),

    setSearchResult: createAction('SEARCH/SET-SEARCH-RESULT')<{ questionIds: number[] | null }>(),
}

export type SearchActions = ActionType<typeof searchActions>
