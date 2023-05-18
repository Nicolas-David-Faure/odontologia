import { createSlice } from '@reduxjs/toolkit'



export const mainSlice = createSlice({
  name: 'stwitchSection',
  initialState:{
   value: "home"
  },
  reducers: {
    defineSection: (state , action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { defineSection } = mainSlice.actions
