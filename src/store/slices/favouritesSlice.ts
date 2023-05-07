import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/iproduct.interface";
import { RootState } from "../store";

interface LikeSliceState {
  items: IProduct[];
  totalPrice: number;
}

const initialState: LikeSliceState = {
  items: [],
  totalPrice: 0,
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<IProduct>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const selectLikeItemById = (id: string) => (state: RootState) =>
  state.favourite.items.find((obj) => obj.id === id);
export const selectLike = (state: RootState) => state.favourite;
export const { addItems, removeItems } = favouriteSlice.actions;
export default favouriteSlice.reducer;
