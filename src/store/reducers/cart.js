import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, {payload}) => {
      const haveProduct = state.some(product => product.id === payload);
      if (!haveProduct) return [
        ...state,
        {
          id: payload,
          quantity: 1
        }
      ];
      return state.filter(product => product.id !== payload);
    }
  }
});

export const { changeCart } = cartSlice.actions;

export default cartSlice.reducer;
