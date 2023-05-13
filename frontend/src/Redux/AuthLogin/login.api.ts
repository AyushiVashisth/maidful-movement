import axios from "axios";
import { LoginData } from "../../utils/type";


export const userLoginAPI = async (payload: LoginData) => {
  try {
    let res= await axios.post(`${process.env.REACT_APP_URL}/user/login`,payload);
    console.log(res.data.data.weeklyReports)
    return res.data;
  } catch (er) {
    console.error("user login api error-");
  }
};

// console.log(res.data.data.weeklyReports)

// : AxiosResponse<{ res: LoginRes}> 