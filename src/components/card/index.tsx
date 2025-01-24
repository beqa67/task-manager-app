import {CardProps} from "./types/card.interface";
import {ChangeEvent, FC} from "react";
import styles from './styles.module.scss'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {changeTaskStatus} from "../../state/taskManagment/taskManagementSlice";
import {statuses} from "../../constants/constants";

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
       <select value={status} onChange={handleOnChane}>
         <option value={statuses.IN_REVIEW}>In Review</option>
         <option value={statuses.IN_PROGRESS}>In Progress</option>
         <option value={statuses.TO_DO}>To Do</option>
         <option value={statuses.DONE}>Done</option>
         <option value={statuses.IN_TEST}>Test</option>
       </select>
     </div>
  )
}

export default Card