import React, {useCallback, useState} from "react";
import {Drawer, IconButton} from "@material-ui/core";
import {useStyles} from "./styles";
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
    menuList: React.ReactNode
}

export const MenuButton: React.FunctionComponent<Props> = ({ menuList }) => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const onToggle = useCallback(
        () => setOpen(!open),
        [open, setOpen]
    )

    const closeList = setOpen.bind(null, false)

    return (
        <>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={onToggle}
            >
                <MenuIcon />
            </IconButton>

            <Drawer anchor="left" open={open} onClose={closeList}>
                <div
                    role="presentation"
                    onClick={closeList}
                    onKeyDown={closeList}
                >
                    {menuList}
                </div>
            </Drawer>
        </>
    )
}
