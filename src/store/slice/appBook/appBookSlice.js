import { createSlice } from '@reduxjs/toolkit'


//Al aumentar el contador de step cambiara o volvera para atras con total libertad
export const appBookSlice = createSlice({
  name: 'appBook',
  initialState:{
   valueStep: 1,
   sureToExit:false,
  },
  reducers: {
    nextStep: (state)=>{
      state.valueStep++
    }
    ,
    backStep: state=>{state.valueStep >= 1 ?
                  state.valueStep--
                                      :
                  console.log("You can't go less than 0")}
    ,
    resetSteps: state =>{
      state.valueStep = 0
      state.sureToExit = false
    },
    warningSureToExit: (state)=>{
      state.sureToExit = !state.sureToExit
    }

    // getValueStep: (state )=>{
    //   return state.valueStep
    // }

  },
})

// Action creators are generated for each case reducer function
export const { nextStep , backStep , resetSteps , warningSureToExit } = appBookSlice.actions