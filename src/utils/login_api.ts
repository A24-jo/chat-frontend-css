import { AxiosError } from "axios";
import { LoginResponse, UserFormData } from "../interface/user_interface";
import { Axios } from "../service/axios";

export const Login_utils = async (dt: {
  email: string;
  phone: string;
  password: string;
}):Promise<LoginResponse | null> => {
  try {
    const { data } = await Axios.post<LoginResponse>("/user/login", dt);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const Register_utils = async (dt:UserFormData)=>{
   try {
        await Axios.post<{message:string}>("/user/register", dt);
       return 1;
   } catch (e) {
    const error = e as AxiosError;
    console.log(error)
     return 0
   }
};