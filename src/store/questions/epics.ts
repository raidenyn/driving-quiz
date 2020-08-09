import {combineEpics, Epic} from "redux-observable";
import {questionsActions, QuestionsActions} from "./actions";
import {isActionOf} from "typesafe-actions";
import {filter, map, mergeMap} from "rxjs/operators";
import {RootState} from "../state";
import {of} from "rxjs";
import {Question} from "./state";

const epics : { [name: string] : Epic<QuestionsActions, QuestionsActions, RootState> } = {
    retrieveQuestions: action$ =>
        action$.pipe(
            filter(isActionOf(questionsActions.retrieve)),
            mergeMap(async _ => {
                const { default: getter } = await import('../../data/questions')
                return getter
            }),
            mergeMap( getter => getter()),
            map((questions: Question[]) => {
                // shuffle answers
                for (const question of questions) {
                    const versions = Object.keys(question.answers)
                    const newAnswers: typeof question.answers = { }
                    for (const [version, answer] of Object.entries(question.answers)) {
                        const newVersion = versions.splice(Math.floor(Math.random() * versions.length), 1)[0]
                        if (question.correctAnswerId === version) {
                            question.correctAnswerId = newVersion
                        }
                        newAnswers[newVersion] = answer
                    }
                    question.answers = newAnswers
                }
                return questions
            }),
            map(questions => questionsActions.append({
                questions
            }))
        ),

    initialize: () => of(null).pipe(
        map(() => questionsActions.retrieve())
    ),
}

export const questionsEpics = combineEpics<QuestionsActions, QuestionsActions, RootState>(...Object.values(epics))
