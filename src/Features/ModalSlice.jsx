import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};
const ModalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    OpenModal: (state, action) => {
      state.isOpen = true;
    },
    CloseModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { OpenModal, CloseModal } = ModalSlice.actions;

export default ModalSlice.reducer;
