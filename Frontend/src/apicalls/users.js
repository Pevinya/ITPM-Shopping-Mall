import { axiosInstance } from "./axiosInstance";


//register a user
export const RegisterUser = async (payload) => {
    try {
        console.log(payload)
        const response = await axiosInstance.post("/api/users/register", payload);
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

//Login a user
export const LoginUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/users/login", payload);
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

