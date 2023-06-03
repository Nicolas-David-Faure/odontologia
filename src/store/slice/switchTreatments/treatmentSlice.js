import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  treatmentIndexToDisplay: null,
}

export const treatmentSlice = createSlice({
  name: 'treatment',
  initialState,
  reducers: {
    switchTreatment: (state, action) => {
      state.treatmentIndexToDisplay = action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const { switchTreatment } = treatmentSlice.actions