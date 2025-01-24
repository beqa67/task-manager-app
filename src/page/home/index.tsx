import Card from "../../components/card";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {statuses} from "../../constants/constants";

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
       { sortedData[statuses.TO_DO] && sortedData[statuses.TO_DO].map((task) => (
            <div key={`${task.id}sdfsdf`} className="col-3 mb-6">
              <Card data={task} />
            </div>
          ))
       }
     </div>
  )
}

export default HomePage