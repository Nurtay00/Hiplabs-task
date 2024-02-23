import {useDispatch, useSelector} from "react-redux";
import {ChangeStatus} from "../../actions/actionFilter";
import style from './filter.module.scss'
import {RootState} from "../../interfaces/todoInterface";

const Filter = () => {
    const dispatch = useDispatch()
    const statuses: string[] = [
        'all',
        'active',
        'done'
    ]

    const status = useSelector((state: RootState) => {
        return state.status
    })

    const handleChangeStatus = (e: string) => {
        dispatch(ChangeStatus(e))
    }

    return <div className={style.filterWrapper}>
        {statuses.map(el => <div className={el === status ? style.active : ''}
                                 key={Math.random()}
                                 onClick={() => handleChangeStatus(el)}>{el}</div>)}
    </div>
}

export default Filter