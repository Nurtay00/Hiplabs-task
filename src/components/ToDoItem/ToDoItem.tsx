import {memo} from "react";
import {useDispatch} from "react-redux";

import {changeItem, deleteItem} from "../../actions/actionToDo";
import style from './todoItem.module.scss'
import {ToDoInteface} from "../../interfaces/todoInterface";

const ToDoItem = memo(({text, id, status}: ToDoInteface) => {
    const dispatch = useDispatch()
    const changeStatus = () => {
        const isStatus = status === 'active' ? 'done' : 'active'
        dispatch(changeItem(text, isStatus, id))
    }
    const deleteTodo = () => {
        dispatch(deleteItem(id))
    }
    return <div className={style.todoItemWrapper}><span className={`${style.todoItemText} ${style[status]}`}
                                                        onClick={() => changeStatus()}
    >{text}</span>
        <button className={style.todoItemBtn} onClick={() => deleteTodo()}>delete</button>
    </div>
})

export default ToDoItem