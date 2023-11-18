import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, category, search } = params;
    const { data } = await axios.get(
      `https://a4b2f70c0a223b33.mokky.dev/items?${category}&sortBy=${sortBy}${search}`
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading', //loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      console.log('Идет отправка запроса');
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
      console.log('Загрузка успешно! Все ОК');
    },
    [fetchPizzas.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
      console.log('Ошибка запроса');
    },
  },
});

export const { setPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
