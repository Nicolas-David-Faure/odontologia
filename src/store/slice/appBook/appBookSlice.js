import { createSlice } from '@reduxjs/toolkit'


//Al aumentar el contador de step cambiara o volvera para atras con total libertad
export const appBookSlice = createSlice({
  name: 'appBook',
  initialState:{
   valueStep: 0,
   sureToExit:false,

   userInfo: {
    name:'',
    lastName:'',
    age:'',
    reasons: [],
    email:'',
    phoneNumber:'',
    plusInfo:'',
    more_info: false
   }

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
      state.valueStep = 0;
      state.sureToExit = false;
      state.userInfo = {}

      console.log(state.userInfo)
    },
    warningSureToExit: (state)=>{
      state.sureToExit = !state.sureToExit
    },

    setUserInfo: ({userInfo}, {payload})=>{

      for(let key in payload){
        userInfo[key] = payload[key]
      }
    
    }

  },
})

// Action creators are generated for each case reducer function
export const { nextStep , backStep , resetSteps , warningSureToExit , setUserInfo} = appBookSlice.actions