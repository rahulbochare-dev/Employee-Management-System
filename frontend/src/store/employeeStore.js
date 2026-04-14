import { create } from "zustand";
import { getEmployees } from "../services/employeeApi.js";

const useEmployeeStore = create((set) => {
    employees: null;
    loading: true;
    error: null;

    getEmployees: () => {
        try {
            const response = getEmployees()
            set({ employees: response.data, loading: false })
        } catch (err) {
            set({ error: err.messege, loading: false })
        }
    }
})

export { useEmployeeStore }