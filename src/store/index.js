import { configureStore } from "@reduxjs/toolkit";
import TrendingRepoReducer from "./TrendingRepoReducer";

export const store = configureStore({
  reducer: {
    TrendingRepoReducer,
  },
});
