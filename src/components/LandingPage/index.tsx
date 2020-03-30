import React from "react"
import {Box, Typography} from "@material-ui/core";
import {NewSessionButton} from "../NewSessionButton";

export interface Props {
    onCreateNewSession(): void
}

export const LandingPage: React.FunctionComponent<Props> = ({ onCreateNewSession }) => {
    return (
        <Box m={3}>
            <Typography variant="h3" component="h3">
                Welcome to Thailand Driving Test Quiz
            </Typography>
            <Typography variant="body1">
                Here you can practice your knowledge in standard Thailand Driving Test questions.
                The test contains real questions, that most likely you will see on real exam.
            </Typography>
            <Box display="flex" m={3} justifyContent='center'>
                <NewSessionButton onNewSession={onCreateNewSession} />
            </Box>
        </Box>
    )
}
