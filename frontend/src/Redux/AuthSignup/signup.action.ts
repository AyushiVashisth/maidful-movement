// import { SignUPData } from "../../utils/type";
// import { AppDispatch } from "../store";
// import {
//   SIGNUP_REQUEST,
//   SIGNUP_SUSSESS,
//   SIGNUP_ERROR,
// } from "./signup.actionType";
// import { apiSignupRequest } from "./signup.api";

// export interface IsignupRequest {
//   type: typeof SIGNUP_REQUEST;
// }
// export interface IsignupSuccess {
//   type: typeof SIGNUP_SUSSESS;
// }
// export interface IsignupError {
//   type: typeof SIGNUP_ERROR;
// }
// export type SingupAction = IsignupRequest | IsignupSuccess | IsignupError;

// const singupRequest = (): IsignupRequest => {
//   return {
//     type: SIGNUP_REQUEST,
//   };
// };
// const singupSuccess = (): IsignupSuccess => {
//   return {
//     type: SIGNUP_SUSSESS,
//   };
// };
// const singupError = (): IsignupError => {
//   return {
//     type: SIGNUP_ERROR,
//   };
// };

// export const userSingupRequest:any =
//   (payload: SignUPData) => async (dispatch: AppDispatch) => {
//     console.log(payload)
//     dispatch(singupRequest());
//     try {
//       const res = await apiSignupRequest(payload);
//       if(res){
//         singupSuccess()
//         console.log(res);
//       }
//     } catch (error) {
//       dispatch(singupError())
//     }
//   };
import { SignUPData } from "../../utils/type";
import { AppDispatch } from "../store";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUSSESS,
  SIGNUP_ERROR,
} from "./signup.actionType";
import { apiSignupRequest } from "./signup.api";
import Swal from "sweetalert2";

export interface IsignupRequest {
  type: typeof SIGNUP_REQUEST;
}
export interface IsignupSuccess {
  type: typeof SIGNUP_SUSSESS;
}
export interface IsignupError {
  type: typeof SIGNUP_ERROR;
}
export type SingupAction = IsignupRequest | IsignupSuccess | IsignupError;

const singupRequest = (): IsignupRequest => {
  return {
    type: SIGNUP_REQUEST,
  };
};
const singupSuccess = (): IsignupSuccess => {
  return {
    type: SIGNUP_SUSSESS,
  };
};
const singupError = (): IsignupError => {
  return {
    type: SIGNUP_ERROR,
  };
};

export const userSingupRequest:any =
  (payload: SignUPData) => async (dispatch: AppDispatch) => {
    console.log(payload)
    dispatch(singupRequest());
    try {
      const res = await apiSignupRequest(payload);
      if(res === 'Account already exists') {
        Swal.fire('Error', 'Account already exists', 'error')
      } else {
        dispatch(singupSuccess())
        Swal.fire('Successful', 'Registration successful', 'success')
      }
      console.log("r",res);
    } catch (error) {
      dispatch(singupError())
    }
  };
