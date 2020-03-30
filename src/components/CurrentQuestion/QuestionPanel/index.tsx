import React from "react"
import {Box} from "@material-ui/core";
import { QuestionPicture } from "../../QuestionPicture";

export interface Props {
    questionId: number

    text: string

    picture: string | undefined
}

export const QuestionPanel: React.FunctionComponent<Props> = (props) => {
    return (
        <Box maxWidth="sm">
           {props.questionId}. {props.text}
           <QuestionPicture src={props.picture} />
        </Box>
    )
}
