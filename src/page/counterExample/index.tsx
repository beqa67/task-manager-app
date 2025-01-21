import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./state/store";
import {decrement, increment, incrementAsync, incrementByAmount} from "../../state/counter/counterSlice";

function CounterExample() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
     <div>
       <h2>{count}</h2>
       <button onClick={() => dispatch(increment())}>increment</button>
       <button onClick={() => dispatch(decrement())}>decrement</button>
       <button onClick={() => dispatch(incrementByAmount(10))}>increment by amount</button>
       <button onClick={() => dispatch(incrementAsync(10))}>increment by incrementAsync</button>
     </div>
  );
}

export default CounterExample;
