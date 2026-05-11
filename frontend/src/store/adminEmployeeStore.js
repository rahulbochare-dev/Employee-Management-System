import { create } from "zustand";
import { onboardEmployee } from "../services/adminEmployee.js";

const useAdminEmployeeStore = create((set) => ({
    employees: null,
    loading: true,
    error: null,

    onboardEmployee: async (data) => {
        const response = await onboardEmployee(data)
        set({loading: false, error: null})
        return response
    }
}))

export { useAdminEmployeeStore }