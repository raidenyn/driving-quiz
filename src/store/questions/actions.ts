import {ActionType, createAction} from "typesafe-actions";
import {Question} from "./state";

export const questionsActions =  {
    retrieve: createAction("QUESTIONS/RETRIEVE")(),

    append: createAction("QUESTIONS/APPEND")<AppendQuestionParams>(),
}

export type QuestionsActions = ActionType<typeof questionsActions>

export interface AppendQuestionParams {
    questions: Question[]
}

