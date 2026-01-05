import { createSlice } from "@reduxjs/toolkit";

let cartData = [];

try {
  cartData = JSON.parse(localStorage.getItem("userCart")) || [];
} catch {
  cartData = [];
}

const CartSlice = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    ADDTOCART: (state, action) => {
      const product = action.payload;

      const existingProduct = state.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("userCart", JSON.stringify(state));
    },

    INC: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) product.quantity += 1;

      localStorage.setItem("userCart", JSON.stringify(state));
    },

    DEC: (state, action) => {
      const product = state.find((item) => item.id === action.payload);

      if (product) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          const index = state.findIndex((item) => item.id === action.payload);
          state.splice(index, 1);
        }
      }

      localStorage.setItem("userCart", JSON.stringify(state));
    },

    REMOVE: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("userCart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export const { ADDTOCART, INC, DEC, REMOVE } = CartSlice.actions;
export default CartSlice.reducer;
