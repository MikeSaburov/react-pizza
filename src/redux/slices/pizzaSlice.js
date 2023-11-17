import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
