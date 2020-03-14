import {createEpicMiddleware} from "redux-observable";
import {RootActions} from "./actions";
import {RootState} from "./state";
import {applyMiddleware, compose, createStore, Middleware} from "redux";
import {rootReducer} from "./reducer";
import {rootEpics} from "./epics";
const epicMiddleware = createEpicMiddleware<RootActions, RootActions, RootState>()

function configureStore(initialState?: RootState) {
    const middlerware: Middleware[] = [
        epicMiddleware,
    ]

    const enhancer = compose(
        applyMiddleware(...middlerware)
    )

    return createStore(
        rootReducer,
        initialState,
        enhancer,
    )
}

export type RootStore = ReturnType<typeof configureStore>

export function newStore(initialState?: RootState) {
    const store = configureStore(initialState)

    epicMiddleware.run(rootEpics)

    return store
}
