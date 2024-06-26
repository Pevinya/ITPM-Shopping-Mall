import { axiosInstance } from "./axiosInstance";

//register a user
export const RegisterUser = async (payload) => {
  try {
    console.log(payload);
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
    const response = await axiosInstance.get("/api/users/get-logged-in-user");
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/api/users/users-list");
    console.log("Users fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch users:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete a user
export const deleteUser = async (payload) => {
  try {
    const response = await axiosInstance.delete(`/api/users/delete-profile`, {
      data: payload,
    });
    console.log("User deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to delete user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Edit a user
export const editUser = async (payload) => {
  try {
    const response = await axiosInstance.put(
      `/api/users/update-details`,
      payload
    );
    console.log("User updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to update user:",
      error.response?.data || error.message
    );
    throw error;
  }
};
