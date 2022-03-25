import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {SearchInput} from '../../components/MainMenu/SearchInput'
import {RootState} from '../../store/state'
import {searchActions} from '../../store/search/actions'

const connector = connect(
    (state: RootState)=> {
        return {
            searchPhrase: state.search.searchPhrase,
        }
    },
    {
        setSearchPhrase: searchActions.setSearchPhrase,
    },
)

type Props = ConnectedProps<typeof connector>

const SearchInputContainer: React.FunctionComponent<Props> = ({ searchPhrase, setSearchPhrase }) => {
    return (
        <SearchInput
            searchPhrase={searchPhrase}
            onSearchPhraseChanged={setSearchPhrase}
        />
    )
}

export default connector(SearchInputContainer)
