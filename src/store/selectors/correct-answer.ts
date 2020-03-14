import { createSelector } from 'reselect'
import {RootState} from "../state";
import {Question} from "../questions/state";
import {SessionQuestion} from "../session/state";

const currentSession = (state: RootState) => state.session.current

const questions = (state: RootState) => state.questions.all

export const currentSessionQuestion = createSelector(
    currentSession,
    (session) => {
        if (!session) {
            return null
        }
        const index = session.currentQuestionIndex
        return index == null ? null : session.questions[index]
    }
)

export const currentQuestion = createSelector(
    currentSessionQuestion,
    questions,
    (question, questions) => {
        if (!question) {
            return null
        }
        return questions[question.questionId]
    }
)

const isCorrectAnswer = (qestion: Question, sessionQuestion: SessionQuestion) => {
    return qestion.correctAnswerId === sessionQuestion.gottenAnswerId
}

export const currentAnswerIsCorrect = createSelector(
    currentQuestion,
    currentSessionQuestion,
    (qestion, sessionQuestion) => {
        if (!qestion || !sessionQuestion) {
            return null
        }
        return isCorrectAnswer(qestion, sessionQuestion)
    }
)

export const totalQuestionsCount = createSelector(
    currentSession,
    (session) => session ? Object.keys(session.questions).length : null,
)

export const currentQuestionsCount = createSelector(
    currentSession,
    (session) => session ? session.currentQuestionIndex + 1 : null,
)

export const totalCorrectAnswers = createSelector(
    currentSession,
    questions,
    (session, questions) => {
        if (!session || !questions) {
            return null
        }
        return session.questions.reduce((total, question) => {
            if (isCorrectAnswer(questions[question.questionId], question)) {
                total++
            }
            return total
        }, 0)
    }
)
