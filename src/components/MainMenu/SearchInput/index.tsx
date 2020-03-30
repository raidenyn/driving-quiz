import React, {useCallback} from "react";
import {InputBase} from "@material-ui/core";
import {useStyles} from "./styles";
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    searchPhrase: string

    onSearchPhraseChanged(params: { searchPhrase: string }): void
}

export const SearchInput: React.FunctionComponent<Props> = ({ searchPhrase, onSearchPhraseChanged }) => {
    const classes = useStyles()

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onSearchPhraseChanged({ searchPhrase: event.target.value })
        },
        [onSearchPhraseChanged])

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchPhrase}
                onChange={onChange}
            />
        </div>
    )
}
