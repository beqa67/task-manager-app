import {tasks} from "../../fakeData/tasks";
import {createSlice} from "@reduxjs/toolkit";

interface TaskManagementState {
  tasks: {
    id: number,
    title: string,
    description: string,
    isCompleted: boolean,
    dueDate: string,
  }
}

const initialState: TaskManagementState = {
  tasks: tasks
}

const taskManagementSlice = createSlice({
  name: 'taskManagement',
  initialState,
  reducers: {}
})

export default taskManagementSlice.reducer