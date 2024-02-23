import {
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
} from "../types/todoTypes"
import {ActionInterface, LoaderInterface} from "../interfaces/todoInterface";

const intialState: { loading: boolean, error: null | string } = {
    loading: false,
    error: null
}

export const loaderReducer = (state = intialState, action: LoaderInterface) => {
    switch (action.type) {
        case LOADER_DISPLAY_ON:
            return {
                ...state,
                loading: true
            }

        case LOADER_DISPLAY_OFF:
            return {
                ...state,
                loading: false
            }

        case ERROR_DISPLAY_ON:
            return {
                ...state,
                error: action.payload.error
            }

        case ERROR_DISPLAY_OFF:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}