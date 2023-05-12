
import React from 'react'
import * as types from "./usersignupactiontype"
import { string } from 'yargs';

export interface User {
     isLoading : boolean;
     loginconfirmation :Actionpayload ;
     isError : boolean
  }

  const initstate : User ={
     isLoading : false,
     loginconfirmation :{
        msg:"",
     } ,
     isError : false
  }

  export interface Actionpayload {
     msg:string;
     token?:string
  }
export interface Actionobj {
    type:string;
    payload:Actionpayload;
}
const usersignupreducer = (state: User = initstate, action: Actionobj):User=> {
    switch(action.type){
        case types.POSTDATAREQUEST:{
           return{
               ...state,
               isError:false,
               isLoading:true,
           }
        }
        case types.POSTDATASUCCESS:{
           return{
               ...state,
               isError:false,
               isLoading:false,
               loginconfirmation:action.payload,
               
           }
        }
        case types.POSTDATAFAILURE:{
           return{
               ...state,
               isError:true,
               isLoading:false,      
           }
        }
         default: return state
   }
  
}

export default usersignupreducer
