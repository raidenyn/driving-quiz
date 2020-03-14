import React from "react"
import {Button} from "@material-ui/core";
import {NextButton} from "./styles";


export interface Props {
    onNextQuestion(): void
}

export const NextQuestionButton: React.FunctionComponent<Props> = ({ onNextQuestion }) => {
    return (
        <NextButton>
            <Button onClick={onNextQuestion} variant="outlined">
                Next question >>>
            </Button>
        </NextButton>
    )
}
