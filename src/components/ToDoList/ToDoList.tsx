import { useSelector} from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";
import {useEffect} from "react";
import {listLoad} from "../../actions/actionToDo";
import Loader from "../Loader/Loader";
import style from './todoList.module.scss'
import {RootState} from "../../interfaces/todoInterface";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const ToDoList = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listLoad());
    }, []);

    const list = useSelector((state: RootState) => {
        return state.todo
    })

    const isStatus = useSelector((state: RootState) => {
        return state.status
    })

    const isLoader = useSelector((state: RootState) => {
        return state.loader.loading
    })


    return <div className={style.todoListWrapper}>
        {list
            .filter((el:any) => isStatus === 'all' || isStatus === el.status)
            .map((el) =>
                <ToDoItem
            key={el.id}
            item={el}/>)}
        {isLoader ? <Loader/> : null}
    </div>
}


export default ToDoList