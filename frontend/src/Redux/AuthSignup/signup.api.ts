import axios from "axios";
import {SignUPData} from "../../utils/type"

export const apiSignupRequest = async (payload:SignUPData) => {
  try {
    const res =await axios.post(`${process.env.REACT_APP_URL}/user/register`,payload)
    // console.log("r",res.data.msg)
    return res.data.msg
  } catch (error) {
    console.log(error)
  }
};
