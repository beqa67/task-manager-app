import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../page/home";
import CounterExample from "../page/counterExample";
const AppRouter = () => {
  return (
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/counter" element={<CounterExample />} />
     </Routes>
  )
}

export default AppRouter