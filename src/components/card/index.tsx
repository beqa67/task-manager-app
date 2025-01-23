import {CardProps} from "./types/card.interface";
import {ChangeEvent, FC} from "react";
import styles from './styles.module.scss'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {changeTaskStatus} from "../../state/taskManagment/taskManagementSlice";

const Card: FC<CardProps> = ({data}) => {
  const {title, description, id, isCompleted, dueDate, status} = data
  const dispatch = useDispatch<AppDispatch>()

   const handleOnChane = (event: ChangeEvent<HTMLSelectElement>) => {
     dispatch(changeTaskStatus({id: id, value: event.target.value}))
  }

  return (
     <div className={`bg-gray-100 ${styles.card}`}>
       <div>{title}</div>
       <div>{description}</div>
       <div>{dueDate}</div>
       <div>{status}</div>
       <select onChange={handleOnChane}>
         <option value="completed">completed</option>
         <option value="inProgress">In Progress</option>
         <option value="todo">To Do</option>
         <option value="done">Done</option>
       </select>
     </div>
  )
}

export default Card