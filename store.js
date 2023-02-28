import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/BasketSlice";
import restaurantReducer from "./features/BasketSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
