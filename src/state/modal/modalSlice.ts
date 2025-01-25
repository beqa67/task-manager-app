import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
  modal: {
    key: string
    title: string,
    description: string
  } | null
}

const initialState: ModalState = {
  modal: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {}
})

export default modalSlice.reducer