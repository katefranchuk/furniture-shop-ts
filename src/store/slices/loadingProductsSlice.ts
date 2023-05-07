import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/iproduct.interface";
import { RootState } from "../store";
import { apiProducts } from "../api-products/apiProducts";

export enum Status {
  LOADING = "loading",
  SUCCES = "success",
  ERROR = "error",
}

interface ProductsSliceState {
  items: IProduct[];
  status: Status;
}

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IProduct[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiProducts.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(apiProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCES;
    });
    builder.addCase(apiProducts.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectProductData = (state: RootState) => state.products;

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
