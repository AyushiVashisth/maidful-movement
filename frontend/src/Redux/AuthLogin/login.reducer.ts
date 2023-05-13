
import { LoginRes,responce } from '../../utils/type';
import { AuthAction } from './login.action'
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_ERROR} from './login.actionType'


interface Iinitial {
  token:string,
  isLoading: boolean;
  error: boolean;
  isAuth: boolean;
  data:any;
}
const initial: Iinitial = {
  token:'',
  isLoading: false,
  error: false,
  isAuth: false,
  data:[]
};
export const loginReducer = (state = initial, action: AuthAction) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token:action.payload.token,
        data:action.payload.data,
        isAuth: true,
      };
    }
    case USER_LOGIN_ERROR: {
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
};
