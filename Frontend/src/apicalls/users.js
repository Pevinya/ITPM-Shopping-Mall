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

//get user details
export const GetLoggedInUserDetails = async () => {
    try {
        const response = await axiosInstance.get("/api/users/get-logged-in-user",);
        console.log(response)
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

