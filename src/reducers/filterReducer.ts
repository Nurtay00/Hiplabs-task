import {CHANGE_FILTER} from "../types/todoTypes";

const initalFilter: string = 'all'

export const filterReducer = (state: string = initalFilter, action: { type: string, payload: string }) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.payload
    }
    return state
}