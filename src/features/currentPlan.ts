import { createSlice } from '@reduxjs/toolkit';

import { plans } from '../utils/consts';

const initialState = {
  currentPlan: plans[0],
};

const currentPlanSlice = createSlice({
  name: 'currentPlan',
  initialState,
  reducers: {
    setCurrentPlan: (state, action) => {
      state.currentPlan = action.payload;
    },
  }
});

export const { setCurrentPlan } = currentPlanSlice.actions;
export default currentPlanSlice.reducer;
