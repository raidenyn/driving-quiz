import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from '../store/state'
import {sessionActions} from '../store/session/actions'
import {
    currentQuestion, currentQuestionsCount,
    currentSessionQuestion,
    totalCorrectAnswers,
    totalQuestionsCount,
} from '../store/selectors/correct-answer'
import {CurrentQuestion} from '../components/CurrentQuestion'
import {NewSessionButton} from '../components/NewSessionButton'
import {NextQuestionButton} from '../components/NextQuestionButton'
import {Container} from '@material-ui/core'
import {SessionProgressBar} from '../components/SessionProgressBar'
import {SessionResult} from '../components/SessionResult'
import {LandingPage} from '../components/LandingPage'

const connector = connect(
    (state: RootState)=> {
        return {
            session: state.session.current,
            question: currentQuestion(state),
            gottenAnswerId: currentSessionQuestion(state)?.gottenAnswerId || null,

            totalQuestions: totalQuestionsCount(state),
            currentQuestion: currentQuestionsCount(state),
            correctAnswers: totalCorrectAnswers(state),
        }
    },
    sessionActions,
)

type Props = ConnectedProps<typeof connector>

const Question: React.FunctionComponent<Props> = props => {
    if (!props.session) {
        return <LandingPage onCreateNewSession={props.createNew} />
    }

    if (!props.question) {
        return (
            <Container>
                <SessionResult
                    total={props.totalQuestions}
                    correct={props.correctAnswers}
                />
                <NewSessionButton onNewSession={props.createNew} />
            </Container>
        )
    }

    return (
        <Container>
            <SessionProgressBar
                total={props.totalQuestions ?? 0}
                current={props.currentQuestion ?? 0}
                correct={props.correctAnswers ?? 0}
            />
            <CurrentQuestion
                key="question"
                question={props.question}
                gottenAnswerId={props.gottenAnswerId}
                onAnswer={props.answer}
            />
            {
                props.gottenAnswerId != null &&
                (
                    <NextQuestionButton key="next" onNextQuestion={props.nextQuestion}/>
                )
            }
        </Container>
    )
}

export default connector(Question)
