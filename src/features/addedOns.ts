import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addedOns: [],
};

const addedOnsSlice = createSlice({
  name: 'addedOns',
  initialState,
  reducers: {
    setAddedOns: (state, action) => {
      return {
        ...state,
        addedOns: action.payload,
      };
    },
  },
});

export const { setAddedOns } = addedOnsSlice.actions;

export default addedOnsSlice.reducer;
