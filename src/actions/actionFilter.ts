import {CHANGE_FILTER} from "../types/todoTypes";

export function ChangeStatus(status: string) {
    return {
        type: CHANGE_FILTER,
        payload: status
    }
}