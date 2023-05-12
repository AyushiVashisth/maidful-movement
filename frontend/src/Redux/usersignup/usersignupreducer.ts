
import React from 'react'
import * as types from "./usersignupactiontype"
export interface Singleuser {
    name: string;
    id: string;
    email : string;
    password:string
  }
export interface User {
     isLoading : boolean;
     userdata : Singleuser[];
     isError : boolean
  }

  const initstate : User ={
     isLoading : false,
     userdata : [],
     isError : false
  }
export interface Actionobj {
    type:string;
    payload:Singleuser[],
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
               userdata:action.payload,
               
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
