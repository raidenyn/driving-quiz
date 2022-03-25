import React from 'react'
import {Button} from '@material-ui/core'


export interface Props {
    onNewSession(): void
}

export const NewSessionButton: React.FunctionComponent<Props> = ({ onNewSession }) => {
    return (
        <Button onClick={onNewSession}>
            Start a new session
        </Button>
    )
}
