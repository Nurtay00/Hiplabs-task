import {memo} from "react";

import {changeItem, deleteItem} from "../../actions/actionToDo";
import style from './todoItem.module.scss'
import {ToDoInteface} from "../../interfaces/todoInterface";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const ToDoItem = memo(({item}: { item: ToDoInteface }) => {
    const dispatch = useAppDispatch()
    const {status, text} = item
    const changeStatus = () => {
        const isStatus = status === 'active' ? 'done' : 'active'
        dispatch(changeItem({...item, status: isStatus}))
    }
    const deleteTodo = () => {
        dispatch(deleteItem(item))
    }
    return <div className={style.todoItemWrapper}><span className={`${style.todoItemText} ${style[status]}`}
                                                        onClick={() => changeStatus()}
    >{text}</span>
        <button className={style.todoItemBtn} onClick={() => deleteTodo()}>delete</button>
    </div>
})

export default ToDoItem