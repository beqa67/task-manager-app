import {tasks} from "../../fakeData/tasks";
import Card from "../../components/card";

const HomePage = () => {

  return (
     <div className="row">
       {
         tasks.map((task) => (
            <div className="col-3 mb-6">
              <Card data={task} />
            </div>
          ))
       }
     </div>
  )
}

export default HomePage