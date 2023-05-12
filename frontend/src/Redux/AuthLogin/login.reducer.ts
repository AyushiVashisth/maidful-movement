import { stat } from 'fs'
import { AuthAction } from './login.action'
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_ERROR} from './login.actionType'

interface Iinitial{
    token:string,
    loading:boolean,
    error:boolean,
    isAuth:boolean,
}
const initial:Iinitial={
    token:'',
    loading:false,
    error:false,
    isAuth:false,
}
export const reducer=(state=initial,action:AuthAction)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case USER_LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                token:action.payload,
                isAuth:true,
            }
        }
        case USER_LOGIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
                isAuth:false
            }
        }
        default: return state
    }
}

