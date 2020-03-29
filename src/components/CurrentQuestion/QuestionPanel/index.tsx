import React from "react"
import {Box} from "@material-ui/core";
import { Picture } from "./Picture";

export interface Props {
    questionId: number

    text: string

    picture: string | undefined
}

export const QuestionPanel: React.FunctionComponent<Props> = (props) => {
    return (
        <Box maxWidth="sm">
           {props.questionId}. {props.text}
           <Picture src={props.picture} />
        </Box>
    )
}
