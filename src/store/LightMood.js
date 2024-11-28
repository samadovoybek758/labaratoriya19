// LightMood.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'light', 
};

export const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    Light: (state, action) => {
      if (action.payload === true) {
        state.value = 'light';
      }
    },
    Dark: (state, action) => {
      if (action.payload === false) {
        state.value = 'dark';
      }
    },
  },
});

export const { Light, Dark } = moodSlice.actions;

export default moodSlice.reducer;
