import React from "react"
import {Correct, Result} from "./styles";

export interface Props {
    total: number | null

    correct: number | null
}

export const SessionResult: React.FunctionComponent<Props> =
    ({ total, correct}) => {
    return (
        <Result>
            <p>
                You have answered on { total } and
                gotten <Correct>{ correct }</Correct> correct answers
            </p>
        </Result>
    )
}
