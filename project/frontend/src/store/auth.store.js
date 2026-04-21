import { create } from "zustand";
import axiosInstance from "../utils/axios";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.post("/users/register-user", userData);
      set({ isLoading: false });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed";
      set({ error: errorMessage, isLoading: false });
      throw new Error(errorMessage);
    }
  },

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.post("/users/login-user", credentials);
      // We don't necessarily get the full user object back on login in this specific backend
      // But we can call checkAuth after login, or just set isAuthenticated
      set({ isAuthenticated: true, isLoading: false });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      set({ error: errorMessage, isLoading: false });
      throw new Error(errorMessage);
    }
  },

  checkAuth: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/users/get-me");
      set({
        user: response.data.checkUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  logout: async () => {
    // In a cookie-based system, logout often requires a backend call to clear the cookie
    // If there's no logout endpoint, we just clear the local state
    set({ user: null, isAuthenticated: false });
  },

  clearError: () => set({ error: null }),
}));

export default useAuthStore;
