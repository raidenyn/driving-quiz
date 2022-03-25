import React from 'react'
import {Correct, Counter} from './styles'

export interface Props {
    total: number

    current: number

    correct: number
}

export const SessionProgressBar: React.FunctionComponent<Props> =
    ({ total, current, correct}) => {
        return (
            <>
                <Counter>
                progress: { current } / { total }, correct: <Correct>{ correct }</Correct>
                </Counter>
            </>
        )
    }
