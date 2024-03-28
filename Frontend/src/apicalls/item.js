import { axiosInstance } from "./axiosInstance";


//Add Items
export const AddItems = async (payload) => {
    try {
        console.log(payload)
        const response = await axiosInstance.post("/api/item/add-items", payload);
        return response.data;       
    } catch (error) {
        throw error;       
    }
};
