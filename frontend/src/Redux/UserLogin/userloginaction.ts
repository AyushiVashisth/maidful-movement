

import axios from "axios"
import { User } from "../usersignup/usersignupreducer"
import { AppDispatch } from "../store"
import * as types from "./userloginactiontype"
  export const userlogindata = (data:User) =>(dispatch : AppDispatch )=>{
          dispatch({type:types.LOGINDATAREQUEST,payload:{msg:""}})
          return axios.post(`https://gold-jittery-chameleon.cyclic.app/user/login`,data)
          .then(r=>dispatch({type:types.LOGINDATASUCCESS,payload:r.data}))
          .catch(err=>dispatch({type:types.LOGINDATAFALIURE,payload:err.message}))
    }
   


