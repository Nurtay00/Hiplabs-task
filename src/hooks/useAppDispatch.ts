import {useDispatch} from "react-redux";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../interfaces/todoInterface";

export type AsyncAction = (dispatch: (action: ThunkAction<void, RootState, unknown, Action>) => any) => void;
export type Dispatcher = (action: AsyncAction | Action) => void

export const useAppDispatch: () => Dispatcher = useDispatch as any;