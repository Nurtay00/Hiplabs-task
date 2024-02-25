import {ADD_TODO, CHANGE_ITEM_STATUS, DELETE_ITEM, LIST_LOAD} from "../types/todoTypes";
import {ActionInterface, ToDoInteface} from "../interfaces/todoInterface";


const initalToDo: ToDoInteface[] = []

export const todoListReducer = (state: ToDoInteface[] = initalToDo, action: ActionInterface<any>) => {
    const {payload} = action
    switch (action.type) {
        case ADD_TODO:
            return [...state, payload]
        case CHANGE_ITEM_STATUS:
            return state.map((el) => el.id === payload.id ? payload : el)

        case DELETE_ITEM:
            console.log(payload,'payload')
            return state.filter((el) => el.id !== payload.id)

        case LIST_LOAD:
            return [...payload]
    }
    return state
}