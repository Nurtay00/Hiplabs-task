import {ChangeEvent, useState} from "react";

import {addTodo} from "../../actions/actionToDo";
import style from './todoInput.module.scss'
import {useAppDispatch} from "../../hooks/useAppDispatch";

const ToDoInput = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(addTodo({text, status: 'active', id: 'id' + Math.random()}))
        setText('')
    }

    return <div className={style.todoInputWrapper}>
        <input type="text" value={text} onChange={(e) => handleInput(e)} className={style.todoInput}/>
        <button onClick={handleSubmit} className={style.todoAddBtn}>add</button>
    </div>
}

export default ToDoInput