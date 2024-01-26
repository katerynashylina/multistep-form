import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedData: [],
};

const selectedData = createSlice({
  name: 'selectedData',
  initialState,
  reducers: {
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
    },
  }
});

export const { setSelectedData } = selectedData.actions;

export default selectedData.reducer;
