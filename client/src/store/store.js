import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipeReducer
  },
});