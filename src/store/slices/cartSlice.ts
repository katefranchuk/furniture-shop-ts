import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/iproduct.interface";
import { RootState } from "../store";

interface CartSliceState {
  totalPrice: number;
  items: IProduct[];
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IProduct>) {
      const selectedItem = state.items.find(
        (obj) => obj.id === action.payload.id
      );

      if (selectedItem) {
        selectedItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    decreaseItemQuantity(state, action: PayloadAction<string>) {
      const selectedItem = state.items.find((obj) => obj.id === action.payload);

      if (selectedItem) {
        selectedItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    increaseItemQuantity(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
export const selectCart = (state: RootState) => state.cart;
export const {
  addItem,
  removeItem,
  decreaseItemQuantity,
  clearItems,
  increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
