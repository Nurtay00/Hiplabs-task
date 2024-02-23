import {combineReducers} from 'redux'
import {todoListReducer} from "./todoListReducer";
import {loaderReducer} from "./loaderReducer";
import {filterReducer} from "./filterReducer";

export const rootReducers = combineReducers({
    todo: todoListReducer,
    loader: loaderReducer,
    status: filterReducer
})