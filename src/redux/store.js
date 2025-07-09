import { configureStore } from "@reduxjs/toolkit";
import { petReducer } from "./petSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { cartReducer } from "./cartSlice";





export const store = configureStore({
  reducer: {
    pet: petReducer,
    cart: cartReducer,
  },

  
});


