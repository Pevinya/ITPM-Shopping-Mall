import { axiosInstance } from "./axiosInstance";

//add package
export const AddPackage = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/package/add-package", payload);
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

//get all packages
export const GetAllPackages = async () => {
    try {
        const response = await axiosInstance.get("/api/package/get-all-packages");
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

//get package by ID
export const GetPackageById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/package/get-package-by-id/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//update package
export const UpdatePackage = async (id, payload) => {
    try {
        const response = await axiosInstance.put(`/api/package/update-package/${id}`, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//delete package
export const DeletePackage = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/package/delete-package/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
