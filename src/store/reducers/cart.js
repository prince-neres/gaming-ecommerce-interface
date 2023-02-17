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
    },
    changeQuantity: (state, {payload}) => {
      state = state.map(productInCart => {
        if(productInCart.id === payload.id) productInCart.quantity += payload.quantity;
        return productInCart;
      })
    },
    resetCart: () => initialState,
  }
});

export const { changeCart, changeQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
