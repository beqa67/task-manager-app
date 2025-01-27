import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {openModal} from "../../state/modal/modalSlice";

const HeaderComponent = () => {
  const dispatch = useDispatch<AppDispatch>()
  const handleNewTask = () => {
    dispatch(openModal({key: 'ADD_NEW_TASK', title: 'test', description: 'test'}))
  }

  return (
     <div className="p-5">
       header
       <button onClick={handleNewTask}>add new task</button>
     </div>
  )
}

export default HeaderComponent