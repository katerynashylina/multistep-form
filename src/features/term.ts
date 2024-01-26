import { createSlice } from '@reduxjs/toolkit';

import { terms } from '../utils/consts';

const initialState = {
  term: terms[0],
};

const termSlice = createSlice({
  name: 'term',
  initialState,
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
  }
});

export const { setTerm } = termSlice.actions;
export default termSlice.reducer;
