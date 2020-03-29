import React from "react"
import {Grid} from "@material-ui/core";
import {Answers} from "../../../store/questions/state";
import {AnswerPanel} from "./AnswerPanel";

export interface Props {
    answers: Answers

    correctAnswerId: string | null

    gottenAnswerId: string | null

    onAnswer(params: { answerId: string }): void
}

export const AnswersPanel: React.FunctionComponent<Props> = (props) => {
    return (
        <Grid container spacing={2}>
            {
                Object.entries(props.answers)
                    .map(([id, answer]) => (
                        <Grid item xs={12} sm={6} key={id}>
                            <AnswerPanel
                                answerId={id}
                                answer={answer}
                                isAvailable={props.gottenAnswerId == null}
                                isCorrect={props.correctAnswerId === id}
                                isGotten={props.gottenAnswerId === id}
                                onAnswer={props.onAnswer}
                            />
                        </Grid>
                    ))
            }
        </Grid>
    )
}
