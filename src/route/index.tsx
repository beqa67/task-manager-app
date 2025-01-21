import { Routes, Route } from "react-router-dom";
import HomePage from "../page/home";
import CounterExample from "../page/counterExample";
import MainLayout from "../layout/mainLayout";
const AppRouter = () => {
  return (
     <Routes>
       <Route path="/" element={<MainLayout />}>
         <Route path="/" element={<HomePage />} />
         <Route path="/counter" element={<CounterExample />} />
       </Route>
     </Routes>
    )
}

export default AppRouter