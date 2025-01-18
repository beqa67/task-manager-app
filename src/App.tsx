import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./state/store";
import {decrement, increment} from "./state/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
