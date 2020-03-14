import {combineEpics} from "redux-observable";
import {questionsEpics} from "./questions/epics";
import {sessionsEpics} from "./session/epics";

export const rootEpics = combineEpics(
    questionsEpics,
    sessionsEpics,
)
