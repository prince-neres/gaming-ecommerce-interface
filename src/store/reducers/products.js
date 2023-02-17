import { createSlice } from '@reduxjs/toolkit';
import superMarioOdyssey from 'assets/products/super-mario-odyssey.png'
import callOfDutyInfiniteWarfare from 'assets/products/call-of-duty-infinite-warfare.png'  
import callOfDutyWWII from 'assets/products/call-of-duty-wwii.png'  
import Fifa18 from 'assets/products/fifa-18.png'  
import HorizonZeroDoawn from 'assets/products/horizon-zero-dawn.png'  
import MortalKombatXL from 'assets/products/mortal-kombat-xl.png'  
import ShardsOfDarkness from 'assets/products/shards-of-darkness.png'  
import TerraMediaSombrasDeMordor from 'assets/products/terra-media-sombras-de-mordor.png'  
import TheWitcherIIIWildHunt from 'assets/products/the-witcher-iii-wild-hunt.png'

const initialState = [
  {
    "id": 312,
    "name": "Super Mario Odyssey",
    "price": 197.88,
    "score": 100,
    "image": superMarioOdyssey,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 201,
    "name": "Call Of Duty Infinite Warfare",
    "price": 49.99,
    "score": 80,
    "image": callOfDutyInfiniteWarfare,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 102,
    "name": "The Witcher III Wild Hunt",
    "price": 119.5,
    "score": 250,
    "image": TheWitcherIIIWildHunt,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 99,
    "name": "Call Of Duty WWII",
    "price": 249.99,
    "score": 205,
    "image": callOfDutyWWII,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 12,
    "name": "Mortal Kombat XL",
    "price": 69.99,
    "score": 150,
    "image": MortalKombatXL,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 74,
    "name": "Shards of Darkness",
    "price": 71.94,
    "score": 400,
    "image": ShardsOfDarkness,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 31,
    "name": "Terra Média: Sombras de Mordor",
    "price": 79.99,
    "score": 50,
    "image": TerraMediaSombrasDeMordor,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 420,
    "name": "FIFA 18",
    "price": 195.39,
    "score": 325,
    "image": Fifa18,
    "category": "jogos",
    "favorite": false
  },
  {
    "id": 501,
    "name": "Horizon Zero Dawn",
    "price": 115.8,
    "score": 290,
    "image": HorizonZeroDoawn,
    "category": "jogos",
    "favorite": false
  }
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeFavorite: (state, {payload}) => {
      state = state.map(product => {
        if(product.id === payload) product.favorite = !product.favorite
        return product;
      })
    }
  }
});

export const { changeFavorite } = productsSlice.actions;

export default productsSlice.reducer;
