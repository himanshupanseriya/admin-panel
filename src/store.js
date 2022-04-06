import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/Reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
