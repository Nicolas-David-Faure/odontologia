import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./slice/switchSections";
import { treatmentSlice } from "./slice/switchTreatments";

export const store = configureStore({
    reducer: {
        mainDisplaySlice: mainSlice.reducer,
        treatmentSlice: treatmentSlice.reducer,
    },
  })
/*pequeño cambio*/