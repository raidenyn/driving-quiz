import React from "react";
import {GridList, GridListTile} from "@material-ui/core";
import {Question} from "../../store/questions/state";

interface Props {
    questions: Question[]
}

export const SearchQuestionResult: React.FunctionComponent<Props> = (props) => {
    return (
        <GridList cellHeight={160} cols={12}>
            {props.questions.map((question) => (
                <GridListTile key={question.id} cols={12}>
                    <div>
                        {question.id}. {question.text}
                    </div>
                    <div>
                        {question.correctAnswerId}. {question.answers[question.correctAnswerId].text}
                    </div>
                </GridListTile>
            ))}
        </GridList>
    )
}
