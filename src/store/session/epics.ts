import {combineEpics, Epic} from "redux-observable";
import {SessionQuestion} from "./state";
import {sessionActions, SessionActions} from "./actions";
import {isActionOf} from "typesafe-actions";
import {filter, map, withLatestFrom} from "rxjs/operators";
import {RootState} from "../state";
import {selectRandom} from "./logic/select-random";

const epics : { [name: string] : Epic<SessionActions, SessionActions, RootState> } = {
    createNewSession: (action$, state$) =>
        action$.pipe(
            filter(isActionOf(sessionActions.createNew)),
            withLatestFrom(state$),
            map(([, state]) => {
                const allQuestionIds = Object.keys(state.questions.all)
                const questions = selectRandom(allQuestionIds, allQuestionIds.length)
                    .map((questionId) => ({
                        questionId: +questionId,
                        gottenAnswerId: null,
                    } as SessionQuestion))

                return sessionActions.setSession({
                    questions,
                    currentQuestionIndex: 0
                })
            })
        ),
}

export const sessionsEpics = combineEpics<SessionActions, SessionActions, RootState>(...Object.values(epics))
