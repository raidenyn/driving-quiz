import {combineEpics, Epic} from "redux-observable";
import {questionsActions, QuestionsActions} from "./actions";
import {isActionOf} from "typesafe-actions";
import {filter, map, mergeMap} from "rxjs/operators";
import {RootState} from "../state";
import {of} from "rxjs";

const epics : { [name: string] : Epic<QuestionsActions, QuestionsActions, RootState> } = {
    retrieveQuestions: action$ =>
        action$.pipe(
            filter(isActionOf(questionsActions.retrieve)),
            mergeMap(async _ => {
                const { default: getter } = await import('../../data/questions')
                return getter
            }),
            mergeMap( getter => getter()),
            map(questions => questionsActions.append({
                questions
            }))
        ),

    initialize: () => of(null).pipe(
        map(() => questionsActions.retrieve())
    ),
}

export const questionsEpics = combineEpics<QuestionsActions, QuestionsActions, RootState>(...Object.values(epics))
