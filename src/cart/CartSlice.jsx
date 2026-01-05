import { createSlice } from "@reduxjs/toolkit";

let cartData;

try {
  cartData = JSON.parse(localStorage.getItem("userData"));
  if (!Array.isArray(cartData)) {
    cartData = [];
  }
} catch (error) {
  cartData = [];
}

const CartSlice = createSlice({
  name: "cart",
  initialState: cartData,

  reducers: {
    ADDTOCART: (state, action) => {
      const products = action.payload;
      const existingProducts = state.find((item) => item.id == products.id);
      if (existingProducts) {
        existingProducts.quantity += 1;
      } else {
        state.push(products);
      }
      localStorage.setItem("userData", JSON.stringify(state));
    },

    REMOVE: (state, action) => {
      const productId = action.payload;
      const updateCart = state.filter((item) => item.id != productId);
      localStorage.setItem("userData", updateCart);
      return updateCart;
    },

    INC: (state, action) => {
      const id = action.payload;
      const product = state.find((item) => item.id === id);

      if (product) {
        product.quantity += 1;
      }

      localStorage.setItem("userData", JSON.stringify(state));
    },

    DEC: (state, action) => {
      const id = action.payload;
      const product = state.find((item) => item.id === id);

      if (product) {
        product.quantity -= 1;
      }

      if(product && product.quantity === 0){
        const index = state.find((item) => item.id === id)
        state.splice(index,1);
      }
      localStorage.setItem("userCart", JSON.stringify(state));
    },
  },
});

export const { ADDTOCART, REMOVE, INC, DEC } = CartSlice.actions;
export default CartSlice.reducer;
