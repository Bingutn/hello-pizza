import { configureStore } from "@reduxjs/toolkit/dist";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
