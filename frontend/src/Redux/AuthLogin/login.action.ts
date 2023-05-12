import { LoginData } from '../../utils/type'
import { AppDispatch } from '../store'
import { userLoginAPI } from './login.api'
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_ERROR} from './login.actionType'


export interface IuserLoginRequsest{
    type:typeof USER_LOGIN_REQUEST
}
export interface IuserLoginSuccess{
    type:typeof USER_LOGIN_SUCCESS
    payload:string,
}
export interface IuserLoginError{
    type:typeof USER_LOGIN_ERROR
}

export type AuthAction=IuserLoginRequsest|IuserLoginSuccess|IuserLoginError

const userLoginRequest=():IuserLoginRequsest=>{
    return{
        type:USER_LOGIN_REQUEST,
    }
}
const userLoginSuccess=(token:string):IuserLoginSuccess=>{
    return{
        type:USER_LOGIN_SUCCESS,
        payload:token,
    }
}
const userLoginError=():IuserLoginError=>{
    return{
        type:USER_LOGIN_ERROR
    }
}
export const userLogin:any=(payload:LoginData)=>async(dispatch:AppDispatch)=>{
    dispatch(userLoginRequest())
    try{
        let data=await userLoginAPI(payload)
        if(data){
            console.log(data)
        dispatch(userLoginSuccess(data))   
    }
}catch(err){
       dispatch(userLoginError())
    console.error('error in login',err)
   }
}