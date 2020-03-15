import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import SessionQuestionContainer from "./containers/SessionQuestionContainer";
import SearchQuestionContainer from "./containers/SearchQuestionsContainer";

export const Router: React.FunctionComponent = () => (
    <BrowserRouter>
        <Route path="/search" component={SearchQuestionContainer} exact />
        <Route path="/" component={SessionQuestionContainer} exact />
    </BrowserRouter>
)
