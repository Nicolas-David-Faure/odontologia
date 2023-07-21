import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./slice/switchSections";
import { treatmentSlice } from "./slice/switchTreatments";
import { appBookSlice } from "./slice/appBook";
export const store = configureStore({
    reducer: {
        mainDisplaySlice: mainSlice.reducer,
        treatmentSlice: treatmentSlice.reducer,
        appBookSlice: appBookSlice.reducer
    },
  })
