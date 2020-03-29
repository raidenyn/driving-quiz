import React from "react"
import {QuestionPanel} from "./QuestionPanel";
import {Question} from "../../store/questions/state";
import {QuestionLayout} from "./QuestionLayout";
import {AnswersPanel} from "./AnswersPanel";

export interface Props {
    question: Question

    gottenAnswerId: string | null

    onAnswer(params: { answerId: string }): void
}

export const CurrentQuestion: React.FunctionComponent<Props> = ({ question, gottenAnswerId, onAnswer }) => {
    return (
        <QuestionLayout
            question={
                <QuestionPanel
                    questionId={question.id}
                    text={question.text}
                    picture={question.picture}
                />
            }
            answers={
                <AnswersPanel
                    answers={question.answers}
                    correctAnswerId={gottenAnswerId && question.correctAnswerId}
                    gottenAnswerId={gottenAnswerId}
                    onAnswer={onAnswer}
                />
            }
        />
    )
}
