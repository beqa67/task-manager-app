import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import taskManagementReducer from "./taskManagment/taskManagementSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    taskManagement: taskManagementReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch