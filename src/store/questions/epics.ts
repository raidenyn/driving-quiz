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
                    if (!question.correctAnswerId) {
                        console.log(`Question ${question.id} doesn't contain correct answer.`)
                    }
                    if (!question.answers[question.correctAnswerId]) {
                        console.log(`Question ${question.id} doesn't define correct answer ${question.correctAnswerId}.`)
                    }
                }
                return questions
            }),
            map((questions: Question[]) => {
                // shuffle answers
                for (const question of questions) {
                    const versions = Object.keys(question.answers)
                    const newVersions = Object.keys(question.answers)
                    const newAnswers: typeof question.answers = { }
                    let newCorrectAnswer = ""
                    for (const version of versions) {
                        const newVersion = newVersions.splice(Math.floor(Math.random() * newVersions.length), 1)[0]
                        if (question.correctAnswerId === newVersion) {
                            newCorrectAnswer = version
                        }
                        newAnswers[version] = question.answers[newVersion]
                    }
                    question.answers = newAnswers
                    question.correctAnswerId = newCorrectAnswer
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
