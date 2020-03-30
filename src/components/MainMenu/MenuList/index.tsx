

import React from "react";
import List from '@material-ui/core/List';
import {Divider, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import OpenInNew from '@material-ui/icons/OpenInNew';

interface Props {
    onNewSession(): void
}

export const MenuList: React.FunctionComponent<Props> = ({ onNewSession }) => {
    return (
        <>
            <List>
                <ListItem button onClick={onNewSession}>
                    <ListItemIcon><OpenInNew /></ListItemIcon>
                    <ListItemText primary={'Start New Quiz'} />
                </ListItem>
            </List>
            <Divider />
        </>
    )
}
