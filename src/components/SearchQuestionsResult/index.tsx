import React from 'react'
import {Question} from '../../store/questions/state'
import {SearchResultItem} from './SearchResultItem'

interface Props {
    questions: Question[]
}

export const SearchQuestionResult: React.FunctionComponent<Props> = props => {
    return (
        <>
            {props.questions.map(question => (
                <SearchResultItem question={question} key={question.id} />
            ))}
        </>
    )
}
