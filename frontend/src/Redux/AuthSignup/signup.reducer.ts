import {SIGNUP_REQUEST,SIGNUP_SUSSESS,SIGNUP_ERROR} from "./signup.actionType";
import { SingupAction } from "./signup.action";

interface Iinitial{
    isLoading:boolean,
    isError:boolean,
    data:[]
}
const initial:Iinitial={
    isLoading:false,
    isError:false,
    data:[]
}

export const signupReducer=(state=initial,action:SingupAction)=>{
  console.log("a",action)
    switch (action.type) {
        case SIGNUP_REQUEST:
          return {
            ...state,
            isLoading: true,
          };
        case SIGNUP_SUSSESS: {
          return {
            ...state,
            isLoading: false,
            isAuth: true,
          };
        }
        case SIGNUP_ERROR: {
          return {
            ...state,
            isLoading: false,
            error: true,
            isAuth: false,
          };
        }
        default:
          return state;
      }
}