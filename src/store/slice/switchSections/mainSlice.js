import { createSlice } from '@reduxjs/toolkit'
import { navName } from './navName'


export const mainSlice = createSlice({
  name: 'stwitchSection',

  initialState:{
  value: "home",
  alueKeySection :{
     "home": 0,  
     "aboutUs": 1,  
     "treatments": 2,
     "book": 3,
     "contact": 4,
  } ,
   underlineSelectedItem: navName[0]
  },
  reducers: {
    defineSection: (state , action) => {
      state.value = action.payload
      
    },
    underlineSelectedItem:(state ,action)=>{
      state.underlineSelectedItem = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { defineSection , underlineSelectedItem } = mainSlice.actions
