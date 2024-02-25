import {store} from "../store/store";

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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch