import { configureStore } from '@reduxjs/toolkit';

import currentStepNumberReducer from '../features/stepNumber';
import termReducer from '../features/term';
import addedOnsReducer from '../features/addedOns';
import isValidReducer from '../features/isValid';
// import sumReducer from '../features/sum';
import currentPlanReducer from '../features/currentPlan';
import formStateReducer from '../features/formState';
import selectedDataReducer from '../features/selectedData';

export const store = configureStore({
  reducer: {
    currentStepNumber: currentStepNumberReducer,
    term: termReducer,
    addedOns: addedOnsReducer,
    isValid: isValidReducer,
    currentPlan: currentPlanReducer,
    formState: formStateReducer,
    selectedData: selectedDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
