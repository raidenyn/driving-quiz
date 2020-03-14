import {questionsActions} from "./questions/actions";
import {ActionType} from "typesafe-actions";
import {sessionActions} from "./session/actions";

export const rootActions = {
    questions: questionsActions,

    session: sessionActions,
}

export type RootActions = ActionType<typeof rootActions>
