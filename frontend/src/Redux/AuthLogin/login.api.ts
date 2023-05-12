import axios, { AxiosResponse } from "axios";
import { LoginData } from "../../utils/type";

export const userLoginAPI=async(payload:LoginData)=>{
    try{
        let res:AxiosResponse<{token:string}>=await axios.post(`https://reqres.in/api/login`,payload)

        return res.data.token

    }catch(er){
        console.error('user login api error-')
    }
}