
import { configureStore } from '@reduxjs/toolkit';
import moodReducer from './LightMood';  

export const store = configureStore({
  reducer: {
    light: moodReducer,  
  },
});
