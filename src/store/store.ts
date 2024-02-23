import {createStore, applyMiddleware, compose} from "redux";
import {thunk} from 'redux-thunk'
import {rootReducers} from "../reducers/rootReducers";


export const store = createStore(rootReducers, undefined,
    compose(
        applyMiddleware(thunk)
    ))

