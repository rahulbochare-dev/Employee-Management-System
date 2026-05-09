import { create } from "zustand";
import { getEmployees } from "../services/employeeApi.js";

const useDashboardStore = create((set) => ({
    employees: null,
    loading: true,
    error: null,

    getEmployees: async () => {
        try {
            const response = await getEmployees()
            set({ employees: response.data, loading: false })
        } catch (err) {
            set({ error: err.messege, loading: false })
        }
    }
}))

export { useDashboardStore }