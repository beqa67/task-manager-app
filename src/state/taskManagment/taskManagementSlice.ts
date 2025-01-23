import {tasks} from "../../fakeData/tasks";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
  reducers: {
    changeTaskStatus: (state, action: PayloadAction<number>) => {
      const mappedTasks = state.tasks.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            status: action.payload.value
          }
        }
        return item
      })
      console.log('mappedTasks', mappedTasks)
      state.tasks = mappedTasks
    }
  }
})

export const { changeTaskStatus } = taskManagementSlice.actions
export default taskManagementSlice.reducer