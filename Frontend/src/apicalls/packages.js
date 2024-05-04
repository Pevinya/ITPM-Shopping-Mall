import { axiosInstance } from "./axiosInstance";

// add package
export const AddPackage = async (payload) => {
  try {
    console.log(payload)
    const response = await axiosInstance.post("/api/packages/add-package", payload);
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all packages
export const GetAllPackages = async () => {
  try {
    const response = await axiosInstance.get("/api/packages/get-all-packages",);
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

// update package
export const UpdatePackage = async (id, payload) => {
  try {
    const response = await axiosInstance.put("/api/packages/update-package/${id}", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// delete package
export const DeletePackage = async (id) => {
  try {
    const response = await axiosInstance.delete("/api/packages/delete-package/${id}");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get package by id
export const GetPackageById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/packages/get-package-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};