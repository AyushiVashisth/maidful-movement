import axios, { AxiosResponse } from "axios";
import { LoginRes,LoginData } from "../../utils/type";


export const userLoginAPI = async (payload: LoginData) => {
  try {
    // let res: AxiosResponse<{ res: responcec }> = await axios.post(
    let res: AxiosResponse<{ res: LoginRes}> = await axios.post(`${process.env.REACT_APP_URL}/user/login`,payload);
    return res.data;
  } catch (er) {
    console.error("user login api error-");
  }
};
