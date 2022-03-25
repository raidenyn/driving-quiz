import {combineReducers} from 'redux'

import { questionReducers } from './questions/reducers'
import { sessionReducers } from './session/reducers'
import {searchReducer} from './search/reducers'

export const rootReducer = combineReducers({
    questions: questionReducers,
    session: sessionReducers,
    search: searchReducer,
})
