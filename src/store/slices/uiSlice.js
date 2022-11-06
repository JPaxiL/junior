import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    menuToggle: state => {
      state.menuOpen = !state.menuOpen;
    },
    menuClose: state => {
      state.menuOpen = false;
    }
  }
});

export const { menuToggle, menuClose } = uiSlice.actions;
export default uiSlice;
