import {combineEpics} from 'redux-observable'
import {questionsEpics} from './questions/epics'
import {sessionsEpics} from './session/epics'
import {searchEpics} from './search/epics'
import { RootState } from './state'
import { RootActions } from './actions'

export const rootEpics = combineEpics<RootActions, RootActions, RootState>(
    questionsEpics as any,
    sessionsEpics as any,
    searchEpics as any,
)
