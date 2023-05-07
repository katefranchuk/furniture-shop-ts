import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      if (state.some((recipe) => recipe.id === payload.id)) {
        const index = state.findIndex((recipe) => recipe.id === payload.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(payload);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
