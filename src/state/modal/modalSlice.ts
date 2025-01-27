import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      state.modal = action.payload
    }
  }
})

export const { openModal } = modalSlice.actions

export default modalSlice.reducer