import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {MainLayout} from '../components/MainLayout'
import MainMenuContainer from './MainMenu/MainMenuLayoutContainer'
import {RootState} from '../store/state'
import {currentSearchResultQuestions} from '../store/selectors/search-result'
import SearchResultContainer from './SearchResultContainer'

const connector = connect(
    (state: RootState)=> {
        return {
            resultQuestions: currentSearchResultQuestions(state),
        }
    },
)

type Props = ConnectedProps<typeof connector>

const MainLayoutContainer: React.FunctionComponent<Props> = ({ resultQuestions, children }) => {
    return (
        <MainLayout
            mainMenu={
                <MainMenuContainer />
            }
        >
            {
                resultQuestions
                    ? <SearchResultContainer />
                    : <>{children}</>
            }
        </MainLayout>
    )
}

export default connector(MainLayoutContainer)
