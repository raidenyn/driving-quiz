import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from "../store/state";
import {Container} from "@material-ui/core";
import {searchActions} from "../store/search/actions";
import {SearchQuestionInput} from "../components/SearchQuestionInput";
import {SearchQuestionResult} from "../components/SearchQuestionsResult";
import {currentSearchResultQuestions} from "../store/selectors/search-result";

const connector = connect(
    (state: RootState)=> {
        return {
            search: state.search,
            resultQuestions: currentSearchResultQuestions(state),
        }
    },
    searchActions
)

type Props = ConnectedProps<typeof connector>

const SearchQuestionContainer: React.FunctionComponent<Props> = (props) => {

    return (<Container>
        <SearchQuestionInput
            searchPhrase={props.search.searchPhrase}
            onSearchPhraseChanged={props.setSearchPhrase}
        />
        {
            props.resultQuestions != null &&
            (
                <SearchQuestionResult
                    questions={props.resultQuestions}
                />
            )
        }
    </Container>)
}

export default connector(SearchQuestionContainer)
