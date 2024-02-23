import {useSelector} from "react-redux";
import style from './errorTodo.module.scss'
import {RootState} from "../../interfaces/todoInterface";

const ErrorTodo = () => {

    const error = useSelector((state: RootState) => {
        return state.loader.error
    })
    if (error) {
        return <div className={style.errorTodoWrapper}>{error}</div>
    }
    return null


}
export default ErrorTodo