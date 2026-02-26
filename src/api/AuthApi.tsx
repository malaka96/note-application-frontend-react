import axios from "axios";
import api from "./Api";

export const userLogin = async (email: string, password: string) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res;
  } catch (error) {
    if(axios.isAxiosError(error)){
        throw new Error(error.response?.data?.message || "Login failed");
    }
    throw new Error("Unexpected error");
  }
};

export const userRegister = async (email: string, password: string) => {
    try{
        const res = await api.post("/user/register",{email,password});
        return res;
    }catch(error){
        if(axios.isAxiosError(error)){
            throw new Error(error.response?.data?.message || "Reigstration failed");
        }
        throw new Error("Unexpected error");
    }
}
