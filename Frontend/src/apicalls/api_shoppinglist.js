import { axiosInstance } from "./axiosInstance";

//add shopping list
export const AddShoppingList = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/shoppinglist/add-shopping-list", payload);
        return response.data;       
    } catch (error) {
        throw error;       
    }
};

//get all packages
export const GetAllShoppingList = async () => {
    try {
        const response = await axiosInstance.get("/api/shoppinglist/get-all-ShoppingList");
        return response.data;       
    } catch (error) {
        throw error;       
    }
};


//get shoppingList by ID
export const GetShoppingListById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/shoppinglist/get-Shopping-by-id/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//update ShoppingList
export const UpdateShoppingList = async (id, payload) => {
    try {
        const response = await axiosInstance.put(`/api/shoppinglist/update-ShoppingList/${id}`, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//delete package
export const DeleteShoppingList = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/shoppinglist/delete-Shopping/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
