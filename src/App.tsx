import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./state/store";
import {decrement, increment, incrementByAmount, incrementAsync} from "./state/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>increment </button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>increment by amount</button>
      <button onClick={() => dispatch(incrementAsync(10))}>increment by incrementAsync</button>
    </div>
  );
}

export default App;
