import { createSlice } from '@reduxjs/toolkit';
import gamesBanner from 'assets/banner-games.jpg';

const initialState = [
  {
    id: "jogos",
    name: "Jogos",
    description: "Os melhores e mais populares jogos estão aqui!",
    image: gamesBanner
  }
];

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
});

export default categoriesSlice.reducer;
