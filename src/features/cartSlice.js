import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

// export const getData = createAsyncThunk("cart", async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const result = response.json();
//   return result;
// });

const initialState = {
  cart: [],
  items: ProductData,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToWl: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      console.log(state.cart);
    },
  },
  // extraReducers: {
  //   [getData.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [getData.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.cart = action.payload;
  //   },
  //   [getData.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const { addToWl, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
