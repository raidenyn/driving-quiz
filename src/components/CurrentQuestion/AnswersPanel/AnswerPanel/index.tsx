import React, {useCallback} from "react"
import {Answer} from "../../../../store/questions/state";
import {AnswerButton, AnswerId, AnswerPicture, AnswerText} from "./styles";

export interface Props {
    answerId: string

    answer: Answer

    isAvailable: boolean

    isCorrect: boolean

    isGotten: boolean

    onAnswer(params: { answerId: string }): void
}

export const AnswerPanel: React.FunctionComponent<Props> =
    (
        { answerId, answer, isAvailable, isCorrect, isGotten, onAnswer }
    ) => {
    const onGettingAnswer = useCallback(
        () => {
            if (isAvailable) {
                onAnswer({ answerId })
            }
        },
        [onAnswer, isAvailable, answerId]
    )

    return (
        <AnswerButton
            isCorrect={isCorrect}
            isGotten={isGotten}
            onClick={onGettingAnswer}
            disabled={!isAvailable}
        >
            <AnswerId>{answerId}.</AnswerId>
            <AnswerText>
                {answer.text}
            </AnswerText>
            {
                answer.picture &&
                <AnswerPicture src={`images/${answer.picture}`} />
            }
        </AnswerButton>
    )
}
