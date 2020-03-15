import {RootState} from "../state";
import {createSelector} from "reselect";

const currentSearchResult = (state: RootState) => state.search.result

const questions = (state: RootState) => state.questions.all

export const currentSearchResultQuestions = createSelector(
    currentSearchResult,
    questions,
    (result, questions) => {
        if (!result) {
            return null
        }
        return result.questionIds.map((id) => questions[id])
    }
)