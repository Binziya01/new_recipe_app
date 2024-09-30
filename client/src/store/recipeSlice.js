import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import StatusCode from '../utils/StatusCode';

const API_URL = 'http://localhost:4000/api/v1/auth/all-items';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const getRecipeById = createAsyncThunk('recipes/getRecipeById', async (id) =>{
  const data = await fetch(`http://localhost:4000/api/v1/recipe/recipe-details/${id}`)

  const result = await data.json()
  console.log(result);
  
  return result
  
})

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    recipeDetails:{},
    status: StatusCode.IDLE,
    searchTerm: ''
    
  },
  reducers: {
    setSearchTerm: (state,action) =>{
      state.searchTerm = action.payload
  },
  clearRecipeDetails: (state) => {
      state.recipeDetails = {}
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = StatusCode.loading
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = StatusCode.IDLE
        state.items = action.payload
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = StatusCode.ERROR;
      })
      .addCase(getRecipeById.pending, (state,action)=>{
        state.status=StatusCode.LOADING
    })
    .addCase(getRecipeById.fulfilled, (state,action)=>{
        state.recipeDetails=action.payload
        state.status=StatusCode.IDLE

    })
    .addCase(getRecipeById.rejected, (state,action)=>{
        state.status=StatusCode.ERROR
    })
  },
});

export const {setSearchTerm, clearRecipeDetails}=recipeSlice.actions
export default recipeSlice.reducer;