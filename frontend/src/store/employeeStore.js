import { create } from "zustand";
import { login, logout, getCurrentEmployee } from "../services/employee.js";

const useEmployeeStore = create((set) => ({
  employee: null,
  loading: true,
  error: null,
  isLoggedIn: false,

  login: async (data) => {
    try {
      const response = await login(data);
      set({ employee: response.data, loading: false, isLoggedIn: true });
      return response.data;
    } catch (err) {
      set({ error: err, loading: false });
      return err;
    }
  },

  logout: async () => {
    try {
      const response = await logout();
      set({ employee: null, loading: false, isLoggedIn: false });
      return response.data;
    } catch (err) {
      set({ error: err, loading: false });
      return err;
    }
  },

  getCurrentEmployee: async () => {
    try {
      const response = await getCurrentEmployee();
      set({ employee: response.data.data, loading: false, isLoggedIn: true });
      return response.data;
    } catch (err) {
      set({ error: err, loading: false });
      return err;
    }
  },
}));

export { useEmployeeStore };
