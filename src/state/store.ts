import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import taskManagementReducer from "./taskManagment/taskManagementSlice";
import modalReducer from './modal/modalSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    taskManagement: taskManagementReducer,
    modal: modalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch