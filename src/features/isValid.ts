import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isValid: true,
};

const isValidSlice = createSlice({
  name: 'isValid',
  initialState,
  reducers: {
    setIsValid: (state, action) => {
      state.isValid = action.payload;
    },
  }
});

export const { setIsValid } = isValidSlice.actions;
export default isValidSlice.reducer;
