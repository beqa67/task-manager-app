import {CardProps} from "./types/card.interface";
import {FC} from "react";
import styles from './styles.module.scss'
const Card: FC<CardProps> = ({data}) => {
  const {title, description, id, isCompleted, dueDate} = data
  return (
     <div className={`bg-gray-100 ${styles.card}`}>
       <div>{title}</div>
       <div>{description}</div>
       <div>{isCompleted}</div>
       <div>{dueDate}</div>
     </div>
  )
}

export default Card