import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formState: {
    name: '',
    phone: '',
    email: '',
    isNameFull: true,
    isPhoneFull: true,
    isEmailFull: true,
  },
};

const formStateSlice = createSlice({
  name: 'formState',
  initialState,
  reducers: {
    setFormState: (state, action) => {
      state.formState = { ...state.formState, ...action.payload };
    },
  }
});

export const { setFormState } = formStateSlice.actions;
export default formStateSlice.reducer;
