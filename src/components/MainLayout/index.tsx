import React from 'react'
import {Box, Container} from '@material-ui/core'

interface Props {
    mainMenu: React.ReactNode
}

export const MainLayout: React.FunctionComponent<Props> = ({ mainMenu, children }) => {
    return (
        <Container>
            {mainMenu}
            <Box>
                {children}
            </Box>
        </Container>
    )
}
