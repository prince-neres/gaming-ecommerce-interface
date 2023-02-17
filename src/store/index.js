import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import productsSlice from './reducers/products';
import cartSlice from './reducers/cart'
import searchSlice from  './reducers/search'

const store = configureStore({
  reducer: {
    categories:  categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
    search: searchSlice
  }
});

export default store;
