import {SessionState} from './state'
import {createReducer} from 'typesafe-actions'
import produce from 'immer'
import {SessionActions, sessionActions} from './actions'

const defaultState: SessionState = {
    current: null,
}

export const sessionReducers = createReducer<SessionState, SessionActions>(defaultState)
    .handleAction(sessionActions.setSession, (state, action) =>
        produce(state, draft => {
            draft.current = action.payload
        }))
    .handleAction(sessionActions.answer, (state, action) =>
        produce(state, draft => {
            const qestion = draft.current?.questions[draft.current.currentQuestionIndex]
            if (qestion) {
                qestion.gottenAnswerId = action.payload.answerId
            }
        }))
    .handleAction(sessionActions.nextQuestion, state =>
        produce(state, draft => {
            if (draft.current) {
                draft.current.currentQuestionIndex++
            }
        }))
