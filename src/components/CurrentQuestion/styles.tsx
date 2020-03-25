import styled from 'styled-components'
import {Button} from "@material-ui/core";
import React from "react";

interface AnswerProps {
    isCorrect: boolean | null

    isGotten: boolean | null
}

export const Answer = styled(
    ({isCorrect, isGotten, ...props}: AnswerProps) => <Button {...props} variant="contained"/>
)<AnswerProps>`
  &, &:hover {
    background-color ${({isCorrect, isGotten}) => isCorrect ? "green" : (isGotten ? "yellow" : undefined)};
    width: 100%;
  }
`

export const AnswerId = styled.span`
  font-weight: bold;
  padding-right: 10px;
`

export const AnswerText = styled.span`
  text-transform: none;
`
