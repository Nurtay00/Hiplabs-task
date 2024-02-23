import {store} from "../store/store";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";

export interface ToDoInteface {
    text: string;
    id: string;
    status: string
}

export interface ActionInterface<T> {
    type: string;
    payload: T
}

export interface LoaderInterface {
    type: string;
    payload: {
        error: null | string;
        loading:boolean
    }
}

export type ThunkAction<R, // Return type of the thunk function
    S, // state type used by getState
    E, // any "extra argument" injected into the thunk
    A extends Action // known types of actions that can be dispatched
    > = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => any

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch