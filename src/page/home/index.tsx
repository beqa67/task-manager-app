
import Card from "../../components/card";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";

const HomePage = () => {
  const tasks = useSelector((state: RootState) => state.taskManagement.tasks)

  return (
     <div className="row">
       { tasks && tasks.map((task) => (
            <div key={`${task.id}sdfsdf`} className="col-3 mb-6">
              <Card data={task} />
            </div>
          ))
       }
     </div>
  )
}

export default HomePage