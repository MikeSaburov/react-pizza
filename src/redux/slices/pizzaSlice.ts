import axios from 'axios';

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SearchPizzaParams = {
  sortBy: string;
  category: string;
  search: string;
};

type Pizza = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, //loading | success | error
};

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: SearchPizzaParams) => {
    const { sortBy, category, search } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://a4b2f70c0a223b33.mokky.dev/items?${category}&sortBy=${sortBy}${search}`
    );

    return data as Pizza[];
  }
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      console.log('Идет отправка запроса');
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
      console.log('Загрузка успешно! Все ОК');
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
      console.log('Ошибка запроса');
    });
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     console.log('Идет отправка запроса');
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //     console.log('Загрузка успешно! Все ОК');
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.items = [];
  //     state.status = 'error';
  //     console.log('Ошибка запроса');
  //   },
  // },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
