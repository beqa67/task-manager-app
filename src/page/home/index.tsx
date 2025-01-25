import Card from "../../components/card";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {statuses} from "../../constants/constants";
import styles from './styles.module.scss'

const HomePage = () => {
  const tasks = useSelector((state: RootState) => state.taskManagement.tasks)

  const sortedData = tasks.reduce((acc, item) => {
    if (!acc[item.status]) {
      acc[item.status] = []
    }

    acc[item.status].push(item)
    return acc
  }, {})

  return (
     <div className="row">
       <div className={styles.column}>
         { sortedData[statuses.TO_DO] && sortedData[statuses.TO_DO].map((task) => (
              <Card data={task} key={`${task.id}sdfsdf`} />
         ))
         }
       </div>
       <div className={styles.column}>
         { sortedData[statuses.IN_PROGRESS] && sortedData[statuses.IN_PROGRESS].map((task) => (
              <Card data={task} key={`${task.id}sdfsdf`} />
         ))
         }
       </div>
       <div className={styles.column}>
         { sortedData[statuses.IN_REVIEW] && sortedData[statuses.IN_REVIEW].map((task) => (
              <Card data={task} key={`${task.id}sdfsdf`} />
         ))
         }
       </div>
       <div className={styles.column}>
         { sortedData[statuses.IN_TEST] && sortedData[statuses.IN_TEST].map((task) => (
              <Card data={task} key={`${task.id}sdfsdf`} />
         ))
         }
       </div>
       <div className={styles.column}>
         { sortedData[statuses.DONE] && sortedData[statuses.DONE].map((task) => (
              <Card data={task} key={`${task.id}sdfsdf`} />
         ))
         }
       </div>

     </div>
  )
}

export default HomePage