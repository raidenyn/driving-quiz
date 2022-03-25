import {QuestionsState} from './state'
import {questionsActions, QuestionsActions} from './actions'
import {createReducer} from 'typesafe-actions'
import produce from 'immer'

const defaultState: QuestionsState = {
    all: { },
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: QuestionsActions
    }
}

export const questionReducers = createReducer(defaultState)
    .handleAction(questionsActions.append, (state, action) =>
        produce(state, draft => {
            for (const question of action.payload.questions) {
                draft.all[question.id] = question
            }
        }))
