import {QuestionsState} from './questions/state'
import {SessionState} from './session/state'
import {SearchState} from './search/state'

export interface RootState {
    questions: QuestionsState
    session: SessionState
    search: SearchState
}
