import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from "../store/state";
import {SearchQuestionResult} from "../components/SearchQuestionsResult";
import {currentSearchResultQuestions} from "../store/selectors/search-result";

const connector = connect(
    (state: RootState)=> {
        return {
            resultQuestions: currentSearchResultQuestions(state),
        }
    },
)

type Props = ConnectedProps<typeof connector>

const SearchResultContainer: React.FunctionComponent<Props> = ({ resultQuestions }) => {
    if (resultQuestions == null) {
        return <></>
    }

    return (
        <SearchQuestionResult
            questions={resultQuestions}
        />
    )
}

export default connector(SearchResultContainer)
