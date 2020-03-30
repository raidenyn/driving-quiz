import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {MenuButton} from "../../components/MainMenu/MenuButton";
import {sessionActions} from "../../store/session/actions";
import {RootState} from "../../store/state";
import {MenuList} from "../../components/MainMenu/MenuList";

const connector = connect(
    (_: RootState) => ({ }),
    {
        createNewSession: sessionActions.createNew,
    },
)

type Props = ConnectedProps<typeof connector>

const MainMenuContainer: React.FunctionComponent<Props> = (
    { createNewSession }
) => {
    return (
        <MenuButton
            menuList={
                <MenuList
                    onNewSession={createNewSession}
                />
            }
        />
    )
}

export default connector(MainMenuContainer)
