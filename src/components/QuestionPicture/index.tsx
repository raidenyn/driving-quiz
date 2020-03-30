import React from "react"
import {Box} from "@material-ui/core";

export interface Props {
    src: string | undefined
}

export const QuestionPicture: React.FunctionComponent<Props> = (props) => {
    if (props.src == null) {
        return <></>
    }

    return (
        <Box maxWidth="sm">
            <img src={`images/${props.src}`} alt="question"/>
        </Box>
    )
}
