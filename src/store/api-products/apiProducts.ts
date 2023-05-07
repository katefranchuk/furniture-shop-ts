import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/iproduct.interface";
import axios from "axios";

interface IOrder {
  email: string;
  name: string;
  orderedProducts: IProduct[];
}

export const apiProducts = createAsyncThunk<IProduct[], string[]>(
  "products/apiProducts",
  async (categories: string[]) => {
    const { data } = await axios.get<IProduct[]>(
      `${process.env.REACT_APP_DATA_URL}`
    );
    const filteredData = data.filter((product) =>
      categories.some((category) => product.category.includes(category))
    );

    return filteredData;
  }
);

export const postOrder = createAsyncThunk<IOrder, IOrder>(
  "orders/postOrder",
  async (order) => {
    const { data } = await axios.post<IOrder>(
      "https://6420a00e82bea25f6d04a4a9.mockapi.io/orders",
      order
    );
    return data;
  }
);
