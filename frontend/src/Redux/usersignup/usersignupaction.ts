import React from 'react'
import { User } from './usersignupreducer'
import { AppDispatch, useAppDispatch } from '../store';
import axios from "axios"
import * as types from "./usersignupactiontype"
const usersignupaction = (data:User) =>(dispatch : AppDispatch) => {

    dispatch({type:types.POSTDATAREQUEST,payload:{msg:"Request Sent"}})
    return axios.post("http://localhost:4500/user/register",data)
    .then(r=>dispatch({type:types.POSTDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.POSTDATAFAILURE,payload:e.message}))
  
}

export default usersignupaction













export {}