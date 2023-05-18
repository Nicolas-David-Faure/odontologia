import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./slice/switchSections";

export const store = configureStore({
    reducer: {
        mainDisplaySlice: mainSlice.reducer,
    },
  })