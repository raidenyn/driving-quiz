import {RootState} from '../state'
import {createSelector} from 'reselect'

const currentSearchResult = (state: RootState) => state.search.result

const allQuestions = (state: RootState) => state.questions.all

export const currentSearchResultQuestions = createSelector(
    currentSearchResult,
    allQuestions,
    (result, questions) => {
        if (!result) {
            return null
        }
        return result.questionIds.map(id => questions[id])
    },
)