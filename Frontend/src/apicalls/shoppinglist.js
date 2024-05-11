import { axiosInstance } from "./axiosInstance";

// Create a new shopping list
export const createShoppingList = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/shoppinglist", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch all shopping lists
export const fetchShoppingLists = async () => {
  try {
    const response = await axiosInstance.get("/api/shoppinglist");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a shopping list
export const deleteShoppingList = async (payload) => {
  try {
    const response = await axiosInstance.delete("/api/shoppinglist/delete-list", {
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update a shopping list
export const updateShoppingList = async (payload) => {
  try {
    const response = await axiosInstance.put("/api/shoppinglist/update-list", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
