import { createSlice } from '@reduxjs/toolkit';

import { steps } from '../helpers/consts';

const initialState = {
  currentStepNumber: steps[0].number,
};

const currentStepNumberSLice = createSlice({
  name: 'currentStepNumber',
  initialState,
  reducers: {
    setCurrentStepNumber: (state, action) => {
      state.currentStepNumber = action.payload;
    },
  }
});

export const { setCurrentStepNumber } = currentStepNumberSLice.actions;

export default currentStepNumberSLice.reducer;
