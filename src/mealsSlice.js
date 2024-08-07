// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Breakfast', cost: 90, selected: false },
    { name: 'Coffee / Tea', cost: 20, selected: false },
    { name: 'Lunch', cost: 120, selected: false },
    { name: 'Dinner', cost: 150, selected: false },
  ],

  reducers: {
    toggleMealSelection: (state, action) => {
      state[action.payload].selected = !state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
