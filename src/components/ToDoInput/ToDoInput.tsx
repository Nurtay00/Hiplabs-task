import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../actions/actionToDo";
import style from './todoInput.module.scss'

const ToDoInput = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(addTodo(text, 'active', 'id' + Math.random()))
        setText('')
    }

    return <div className={style.todoInputWrapper}>
        <input type="text" value={text} onChange={(e)=>handleInput(e)} className={style.todoInput}/>
        <button onClick={handleSubmit}  className={style.todoAddBtn} >add</button>
    </div>
}

export default ToDoInput