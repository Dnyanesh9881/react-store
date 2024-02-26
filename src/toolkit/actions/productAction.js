// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProducts = createAsyncThunk(
//   "products/fetch",
//   async (_, thunkAPI) => {
//     const url = "https://fakestoreapi.com/products";
//     try {
//       const res = await axios.get(url);
//       return thunkAPI.fulfillWithValue(res.data);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, thunkAPI) => {
    const url = "https://fakestoreap.com/products";
    try {
      const res = await axios.get(url);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
