import React from "react"
import {Correct, Counter} from "./styles";

export interface Props {
    total: number | null

    current: number | null

    correct: number | null
}

export const SessionAnswersCounter: React.FunctionComponent<Props> =
    ({ total, current, correct}) => {
    return (
        <Counter>
            { current } / { total }, correct: <Correct>{ correct }</Correct>
        </Counter>
    )
}
