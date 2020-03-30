import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {useStyles} from "./styles";

interface Props {
    menu: React.ReactNode

    search: React.ReactNode
}

export const MainMenuLayout: React.FunctionComponent<Props> = ({menu, search}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {menu}
                    <Typography className={classes.title} variant="h6" noWrap>
                        Thailand Driving Test Quiz
                    </Typography>
                    {search}
                </Toolbar>
            </AppBar>
        </div>
    );
}
