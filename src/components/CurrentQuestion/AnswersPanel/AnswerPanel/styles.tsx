import styled from 'styled-components'
import {Button, ButtonProps} from "@material-ui/core";
import React from "react";

interface AnswerButtonProps extends ButtonProps {
    isCorrect: boolean | null

    isGotten: boolean | null
}

export const AnswerButton = styled(
    ({isCorrect, isGotten, ...props}: AnswerButtonProps) => <Button {...props} variant="contained"/>
)<AnswerButtonProps>`
  &, &:hover, &.Mui-disabled {
    background-color: ${({isCorrect, isGotten}) => isCorrect ? "LawnGreen" : (isGotten ? "yellow" : undefined)};
    width: 100%;
    height: 100%;
  }
  
  &.Mui-disabled {
    color: ${({isCorrect, isGotten}) => (isCorrect || isGotten) && "black" };
  }
`

export const AnswerId = styled.span`
  font-weight: bold;
  padding-right: 10px;
`

export const AnswerText = styled.span`
  text-transform: none;
`
