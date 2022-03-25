import {ActionType, createAction} from 'typesafe-actions'
import {Session} from './state'

export const sessionActions =  {
    createNew: createAction('SESSION/CREATE-NEW')(),

    setSession: createAction('SESSION/SET-SESSION')<Session>(),

    answer: createAction('SESSION/ANSWER')<{ answerId: string }>(),

    nextQuestion: createAction('SESSION/NEXT-QUESTION')(),
}

export type SessionActions = ActionType<typeof sessionActions>
