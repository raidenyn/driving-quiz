import React, {useCallback} from "react"
import {Question} from "../../store/questions/state";
import {Answer, AnswerId, AnswerText} from "./styles";
import {Grid, Paper} from "@material-ui/core";

export interface Props {
    question: Question

    gottenAnswerId: string | null

    onAnswer(params: { answerId: string }): void
}

export const CurrentQuestion: React.FunctionComponent<Props> = ({ question, gottenAnswerId, onAnswer }) => {
    const correctAnswerId = gottenAnswerId != null ? question.correctAnswerId : null

    const onGettingAnswer = useCallback(
        (params : {answerId: string}) => {
            if (gottenAnswerId == null) {
                onAnswer(params)
            }
        },
        [onAnswer, gottenAnswerId]
    )

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper>{question.id}. {question.text}</Paper>
            </Grid>
            {
                question.picture &&
                <Grid item xs={12}>
                    <img src={`/images/${question.picture}`} alt="question"/>
                </Grid>
            }
            {
                Object.entries(question.answers)
                    .map(([id, answer]) => (
                        <Grid item xs={12} sm={6} key={id}>
                            <Answer
                                isCorrect={correctAnswerId === id}
                                isGotten={gottenAnswerId === id}
                                onClick={onGettingAnswer.bind(null, { answerId: id })}
                            >
                                <AnswerId>{id}.</AnswerId>
                                <AnswerText>
                                     {answer.text}
                                </AnswerText>
                            </Answer>
                        </Grid>
                ))
            }
        </Grid>
    )
}
