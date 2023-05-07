import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/iproduct.interface";
import axios from "axios";

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
