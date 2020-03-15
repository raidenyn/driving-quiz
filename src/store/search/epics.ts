import {combineEpics, Epic} from "redux-observable";
import {searchActions, SearchActions} from "./actions";
import {isActionOf} from "typesafe-actions";
import {filter, map, withLatestFrom} from "rxjs/operators";
import {RootState} from "../state";

const epics : { [name: string] : Epic<SearchActions, SearchActions, RootState> } = {
    searchQuestions: (action$, state$) =>
        action$.pipe(
            filter(isActionOf(searchActions.setSearchPhrase)),
            withLatestFrom(state$),
            map(([action, state]) => ({
                searchPhrase: action.payload.searchPhrase,
                questions: state.questions.all
            })),
            map(({searchPhrase, questions}) => {
                if (searchPhrase) {
                    return Object
                        .values(questions)
                        .filter((question) => {
                            return question.text.indexOf(searchPhrase) >= 0
                        })
                        .map((question) => question.id)
                } else {
                    return null
                }
            }),
            map((questionIds) => searchActions.setSearchResult({ questionIds }))
        ),
}

export const searchEpics = combineEpics<SearchActions, SearchActions, RootState>(...Object.values(epics))
