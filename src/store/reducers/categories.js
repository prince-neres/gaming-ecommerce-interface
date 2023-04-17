import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "jogos",
    name: "Jogos",
    description: "Os melhores e mais populares jogos estão aqui!",
  },
];

const categoriesSlice = createSlice({
  name: "Categories",
  initialState,
});

export default categoriesSlice.reducer;
