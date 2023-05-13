import axios from "axios";
import {SignUPData} from "../../utils/type"

export const apiSignupRequest = async (payload:SignUPData) => {
  try {
    const res =await axios.post(`${process.env.REACT_APP_URL}/user/register`,payload)
    return res
  } catch (error) {
    console.log(error)
  }
};
