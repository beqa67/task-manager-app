import {Outlet} from "react-router-dom";
import HeaderComponent from '../../components/header'
import '../../App.css'

const mainLayout = () => {
  return (
     <div>
        <HeaderComponent />
         <div className="p-5">
           <Outlet />
         </div>
     </div>
  )
}

export default mainLayout