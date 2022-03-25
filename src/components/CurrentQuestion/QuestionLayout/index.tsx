import React from 'react'
import {Box, Grid, Paper} from '@material-ui/core'

export interface Props {
    question: React.ReactNode

    answers: React.ReactNode
}

export const QuestionLayout: React.FunctionComponent<Props> = props => {
    return (
        <Paper elevation={3}>
            <Box m={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {props.question}
                    </Grid>
                    <Grid item xs={12}>
                        {props.answers}
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}
