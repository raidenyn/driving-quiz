import {questionsActions} from './questions/actions'
import {ActionType} from 'typesafe-actions'
import {sessionActions} from './session/actions'
import {searchActions} from './search/actions'

export const rootActions = {
    questions: questionsActions,

    session: sessionActions,

    search: searchActions,
}

export type RootActions = ActionType<typeof rootActions>
