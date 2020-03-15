import React, {ChangeEvent, useCallback} from "react";
import {Input} from "@material-ui/core";

interface Props {
    searchPhrase: string

    onSearchPhraseChanged(params: { searchPhrase: string }): void
}

export const SearchQuestionInput: React.FunctionComponent<Props> = (props) => {

    const { onSearchPhraseChanged } = props

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onSearchPhraseChanged({ searchPhrase: event.target.value }),
        [onSearchPhraseChanged],
    )

    return (
        <form noValidate autoComplete="off">
            <Input
                id="search-question"
                placeholder="Search Phrase"
                value={props.searchPhrase}
                onChange={onChange}
            />
        </form>
    )
}
