import React from 'react'
import { CardContent, Typography} from '@material-ui/core'
import {Question} from '../../../store/questions/state'
import {QuestionPicture} from '../../QuestionPicture'
import {SearchResultItemCard} from './styles'

interface Props {
    question: Question
}

export const SearchResultItem: React.FunctionComponent<Props> = ({ question }) => {
    return (
        <SearchResultItemCard variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Question #{question.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {question.text}
                </Typography>
                {
                    question.picture &&
                    <QuestionPicture src={question.picture } />
                }
                <Typography color="textPrimary">
                    {question.correctAnswerId}. {question.answers[question.correctAnswerId].text}
                </Typography>
            </CardContent>
        </SearchResultItemCard>
    )
}
