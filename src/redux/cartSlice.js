import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: newItem?.quantity ?? 1,
          totalPrice: newItem.discont_price
            ? newItem.discont_price * (newItem?.quantity ?? 1)
            : newItem.price * (newItem?.quantity ?? 1),
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.discont_price ? existingItem.discont_price
            : existingItem.price
      }

      state.totalQuantity += newItem?.quantity ?? 1;
      state.totalAmount += newItem.discont_price
            ? newItem.discont_price * (newItem?.quantity ?? 1)
            : newItem.price * (newItem?.quantity ?? 1)
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.discont_price
          ? existingItem.discont_price
          : existingItem.price;
      }

      state.totalQuantity--;
      state.totalAmount -= existingItem.discont_price
        ? existingItem.discont_price
        : existingItem.price;
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
      }
    },

    updateItemQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const quantityDiff = newQuantity - existingItem.quantity;
        existingItem.quantity = newQuantity;
        existingItem.totalPrice =
          (existingItem.discont_price
            ? existingItem.discont_price
            : existingItem.price) * newQuantity;

        state.totalQuantity += quantityDiff;
        state.totalAmount +=
          quantityDiff *
          (existingItem.discont_price
            ? existingItem.discont_price
            : existingItem.price);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;



export const cartReducer = cartSlice.reducer;
