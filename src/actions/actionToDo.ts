import {
    ADD_TODO,
    CHANGE_ITEM_STATUS,
    DELETE_ITEM,
    LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON,
    LIST_LOAD, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF
} from "../types/todoTypes";
import {todoService} from "../services/todo.service";
import dataJson from '../exapleData.json'
import {Dispatch} from "redux";
import {ToDoInteface} from "../interfaces/todoInterface";


export const loaderOn = () => {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export const loaderOff = () => {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export const errorOff = () => {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}

export const errorOn = (text: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        });

        setTimeout(() => {
            dispatch(errorOff());
        }, 2000)
    }
}

export const listLoad = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(loaderOn());
            // const data = await todoService.getTodoList()
            const data = dataJson
            setTimeout(() => {
                dispatch({
                    type: LIST_LOAD,
                    payload: data.data
                });
                dispatch(loaderOff());
            }, 3000);
        } catch (err) {
            dispatch(errorOn('Ошибка API'));
            dispatch(loaderOff());
        }
    }
}


export const addTodo = (data: ToDoInteface) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(loaderOn());
            // await todoService.postTodoItem({text, status, id})
            setTimeout(() => {
                dispatch({
                    type: ADD_TODO,
                    payload: data
                });
                dispatch(loaderOff());
            }, 2000);
        } catch (err) {
            dispatch(errorOn('Ошибка API'));
            dispatch(loaderOff());
        }
    }


}

export const changeItem = (data: ToDoInteface) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(loaderOn());
            // await todoService.putTodoItem({text, status, id})
            setTimeout(() => {
                dispatch({
                    type: CHANGE_ITEM_STATUS,
                    payload: data
                });
                dispatch(loaderOff());
            }, 2000);
        } catch (err) {
            dispatch(errorOn('Ошибка API'));
            dispatch(loaderOff());
        }
    }
}

export const deleteItem = (data: ToDoInteface) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(loaderOn());
            // await todoService.deleteTodoItem( id )
            setTimeout(() => {
                dispatch({
                    type: DELETE_ITEM,
                    payload: data
                });
                dispatch(loaderOff());
            }, 2000);
        } catch (err) {
            dispatch(errorOn('Ошибка API'));
            dispatch(loaderOff());
        }
    }
}