
import * as types from "./userloginactiontype"

const initlogin ={
    isError:false,
    isLoading:false,
    token:null,
    error:""
}
export const Loginreducer = (state = initlogin,action)=>{
    switch(action.type){
         case types.LOGINDATAREQUEST:{
            return{
                ...state,
                isError:false,
                isloading:true,
            }
         }
         case types.LOGINDATASUCCESS:{
            return{
                ...state,
                isError:false,
                isloading:false,
                token:action.payload.token
            }
         }
         case types.LOGINDATAFALIURE:{
            return{
                ...state,
                isError:true,
                isloading:false, 
                error:action.payload     
            }
         }
          default: return state
    }
   
}