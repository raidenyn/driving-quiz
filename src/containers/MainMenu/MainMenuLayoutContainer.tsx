import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {MainMenuLayout} from "../../components/MainMenu/MainMenuLayout";
import SearchInputContainer from "./SearchInputContainer";
import MainMenuContainer from "./MainMenuContainer";

const connector = connect()

type Props = ConnectedProps<typeof connector>

const MainMenuLayoutContainer: React.FunctionComponent<Props> = () => {
    return (
        <MainMenuLayout
            menu={<MainMenuContainer />}
            search={<SearchInputContainer />}
        />
    )
}

export default connector(MainMenuLayoutContainer)
