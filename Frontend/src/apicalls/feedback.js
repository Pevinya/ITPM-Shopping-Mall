import { axiosInstance } from "./axiosInstance";

export const AddFeedback = async (payload) => {
    try {
        console.log(payload)
        const response = await axiosInstance.post("/api/feedback/add-feedback", payload);
        console.log(response)
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

export const GetAllFeedbackDetails = async () => {
    try {
        const response = await axiosInstance.get("/api/feedback/get-all-feedbacks",);
        console.log(response)
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

export const GetFeedbackDetails = async (email) => {
    try {
        const response = await axiosInstance.get(`/api/feedback/get-feedback/${email}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const UpdateFeedbackDetails = async (id, payload) => {
    try {
        const response = await axiosInstance.put(`/api/feedback/update-feedback/${id}`, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const DeleteFeedbackDetails = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/feedback/delete-feedback/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
