import {QuestionsState} from "./questions/state";
import {SessionState} from "./session/state";

export interface RootState {
    questions: QuestionsState,
    session: SessionState,
}
