import {SearchState} from './state'
import {createReducer} from 'typesafe-actions'
import produce from 'immer'
import {SearchActions, searchActions} from './actions'

const defaultState: SearchState = {
    searchPhrase: '',
    result: null,
}

export const searchReducer = createReducer<SearchState, SearchActions>(defaultState)
    .handleAction(searchActions.setSearchPhrase, (state, action) =>
        produce(state, draft => {
            draft.searchPhrase = action.payload.searchPhrase
        }))
    .handleAction(searchActions.setSearchResult, (state, action) =>
        produce(state, draft => {
            draft.result = action.payload.questionIds != null ? { questionIds: action.payload.questionIds } : null
        }))
